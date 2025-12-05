import { defineConfig } from 'vitepress'
import { withSidebar } from 'vitepress-sidebar';

// https://vitepress.dev/reference/site-config
const vitePressOptions = {
  srcDir: "docs",
  base: '/vip-certification-study-material/',
  lang: 'en-AU',
  title: "WordPress VIP Certification Study Material",
  description: "Study material for the WordPress VIP Certification (BETA)",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Readme', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhickson/vip-certification-study-material' }
    ]
  }
};

const vitePressSidebarOptions = {
  documentRootPath: '/docs',
  collapsed: true,
  capitalizeFirst: true,
  useTitleFromFileHeading: true,
  useFolderTitleFromIndexFile: true
};

export default defineConfig(withSidebar(vitePressOptions, vitePressSidebarOptions));
