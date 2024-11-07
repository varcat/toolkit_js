import { defineConfig } from "vitepress";
import sidebar from "./sidebar.mts";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "JS工具包",
  description: "简单、小巧、快捷",
  lang: "zh-CN",
  lastUpdated: true,
  themeConfig: {
    search: {
      provider: "local",
    },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "快速开始", link: "/md/quick-start" },
      { text: "Function", link: "/fn/curry" },
      { text: "Class", link: "/class/Vector" },
    ],

    sidebar,

    socialLinks: [
      { icon: "github", link: "https://github.com/varcat/toolkit_js" },
    ],
  },
  rewrites: {
    "src/functions/:fn/(.*)": "fn/:fn/index.md",
    "src/struct/:class/(.*)": "class/:class/index.md",
  },
});
