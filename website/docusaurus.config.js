// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Generative Art',
  tagline: 'MIT IAP Workshop',
  url: 'https://gvarnavi.github.io',
  baseUrl: '/generative-art-workshop-website/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'gvarnavi', // Usually your GitHub org/user name.
  projectName: 'generative-art-workshop-website', // Usually your repo name.
  trailingSlash: false,

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl: 'https://github.com/gvarnavi/generative-art-workshop-website/edit/main/website/docs/',
        },
        blog: {
	  path: 'showcase',
          routeBasePath: 'showcase',
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://github.com/gvarnavi/generative-art-workshop-website/edit/main/website/showcase/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Generative Art',
        logo: {
          alt: 'Generative Art Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Notebooks',
          },
          {to: '/showcase', label: 'Showcase', position: 'left'},
          {
            href: 'https://github.com/gvarnavi/generative-art-workshop-website',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Notebooks',
                to: '/docs/intro',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Showcase',
                to: '/showcase',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/gvarnavi/generative-art-workshop-website',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Generative Art Workshop, Inc`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
