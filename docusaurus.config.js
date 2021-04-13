/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 * @format
 */

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Kaczkoland.pl',
  tagline: 'Serwer Minecraft survival',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'https://kaczkoland.pl/favicon.ico',
  url: 'https://docs.kaczkoland.pl', // Your website URL
  baseUrl: '/',
  projectName: 'docs',
  organizationName: 'kaczkoland',
  themeConfig: {
    navbar: {
      title: 'Kaczkoland.pl',
      logo: {
        alt: 'Kaczkoland',
        src: 'https://kaczkoland.pl/kaczkoland.jpg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Centrum Pomocy',
          position: 'left',
        },
        {
          to: 'https://kaczkoland.pl',
          label: 'Strona główna',
          position: 'left',
        },
        {
          to: 'https://sklep.kaczkoland.pl',
          label: 'Sklep',
          position: 'left',
        },
        {
          to: 'https://blog.kaczkoland.pl',
          label: 'Blog',
          position: 'left',
        },
        {
          to: 'https://kaczkoland.pl/regulamin',
          label: "Regulamin & Polityka Prywatności",
          position: 'left',
        },
        // Please keep GitHub link to the right for consistency.
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Social Media',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/kaczkoland',
            },
            {
              label: 'Instagram',
              href: 'https://instagram.com/kaczkoland',
            },
            {
              label: 'Facebook',
              href: 'https://facebook.com/kaczkoland',
            },
            {
              label: 'Youtube',
              href: 'https://kaczkoland.pl/youtube',
            },
            {
              label: 'Twitch',
              href: 'https://twitch.tv/kaczkoland',
            },
            {
              label: 'Discord',
              href: 'https://dicord.kaczkoland.pl',
            },
          ],
        },
        {
          title: 'Więcej',
          items: [
            {
              label: 'Strona główna',
              href: "http://kaczkoland.pl"
            },
            {
              label: 'Sklep',
              href: "http://kaczkoland.pl"
            },
            {
              label: 'Blog',
              href: "http://blog.kaczkoland.pl"
            },
            {
              label: 'Status',
              href: "http://kaczkoland.pl"
            },
            {
              label: 'Serwer Discord',
              href: "http://discord.kaczkoland.pl"
            },
          ],
        },
        {
          title: 'Inne',
          // Please do not remove the privacy and terms, it's a legal requirement.
          items: [
            {
              label: 'Prywatność',
              href: 'https://opensource.facebook.com/legal/privacy/',
            },
            {
              label: 'Warunki użytkowania',
              href: 'https://opensource.facebook.com/legal/terms/',
            },
            {
              label: 'Regulamin & Polityka Prywatności',
              href: 'https://kaczkoland.pl/regulamin',
            }
          ],
        },
      ],
      logo: {
        alt: 'Facebook Open Source Logo',
        src: 'img/oss_logo.png',
        href: 'https://opensource.facebook.com',
      },
      // Please do not remove the credits, help to publicize Docusaurus :)
      copyright: `Copyright © ${new Date().getFullYear()} Facebook, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/kaczkoland/docs/edit/master/website/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
