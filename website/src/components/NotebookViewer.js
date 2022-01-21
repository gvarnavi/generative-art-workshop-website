import React from 'react';
import NbViewer from 'react-nbviewer';
import axios from "axios";
import Markdown from 'react-markdown';
import MathPlugin from 'remark-math';
import TeX from '@matejmazur/react-katex';
import SyntaxHighlighter from 'react-syntax-highlighter';
import 'katex/dist/katex.min.css';
import 'react-nbviewer/dist/index.css';

const b64DecodeUnicode = (str) => {
  return decodeURIComponent(
    atob(str)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
};

// Cleans up json to remove newlines from math envs
const clean_up_json = (object) => {
  return {
    cells: object.cells.map((el) => {
      if (el.cell_type == "markdown") {
        const source = el.source.join("");
        const clean = source
          .trim()
          .replace(
            /(\${1,2})((?:\\.|[\s\S])*?)\1/g,
            (m, tag, src) => tag + src.replace(/\s/g, "") + tag
          );
        return {
          cell_type: el.cell_type,
          id: el.id,
          metadata: el.metadata,
          source: clean.split(/(?<=\r?\n)/)
        };
      } else {
        return el;
      }
    }),
    metadata: object.metadata,
    nbformat: object.nbformat,
    nbformat_minor: object.nbformat_minor
  };
};

const getNotebook = async (notebookURL) => {
  const regex = new RegExp(
    /https:\/\/github.com\/(.+?)\/(.+?)\/blob\/(.+?)\/(.+\.ipynb)/
  );
  const parts = notebookURL.match(regex);
  const [, organization, repo, branch, notebook] = parts;
  const requestURL = `https://api.github.com/repos/${organization}/${repo}/contents/${notebook}?ref=${branch}`;
  const data = await (await axios.get(requestURL)).data;
  const content = clean_up_json(JSON.parse(b64DecodeUnicode(data.content)));
  //const content = JSON.parse(b64DecodeUnicode(data.content)); // disable TeX rendering
  console.log(content);
  return content;
};


const MathMarkdown = (props) => {
  const renderers = {
    math: ({ value }) => <TeX block math={value} />,
    inlineMath: ({ value }) => <TeX math={value} />,
    code: props => <SyntaxHighlighter language={props.language}>{props.value}</SyntaxHighlighter>
  }
  return <Markdown renderers={renderers} plugins={[MathPlugin]} source={props.source} />
}


export default function NotebookViewer({ notebookURL }) {
  const [notebook, setNotebook] = React.useState(null);

  React.useEffect(() => {
    getNotebook(notebookURL).then(setNotebook);
  }, [notebookURL]);

  return (
    <div className="NotebookViewer">
      {notebook === null ? (
        "Loading notebook..."
      ) : (
        <NbViewer
          source={notebook}
          markdown={MathMarkdown}
          //markdown={Markdown} // disable TeX rendering
          code={SyntaxHighlighter}
        />
      )}
    </div>
  );
}

