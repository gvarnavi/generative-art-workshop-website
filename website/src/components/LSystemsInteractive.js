import React, {useRef, useEffect} from "react";
import {Runtime, Inspector} from "@observablehq/runtime";
import notebook from "@gvarnavi/l-systems-interactive";

function LSystemsInteractive() {
  const ref = useRef();

  useEffect(() => {
    const runtime = new Runtime();
    runtime.module(notebook, Inspector.into(ref.current));
    return () => runtime.dispose();
  }, []);

  return (
    <>
      <div ref={ref} />
      <p>Credit: <a href="https://observablehq.com/@gvarnavi/l-systems-interactive">Interactive L-systems by Georgios Varnavides</a></p>
    </>
  );
}

export default LSystemsInteractive;
