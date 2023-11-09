import { navbar } from "docs-shared";
import { getLinkHelper } from "./utils.js";

const linkHelper = getLinkHelper();

export const enNavbarConfig = navbar([
  "/get-started/",
  "/guide/",
  "/config/",
  "/faq/",
  "/demo/",
  {
    text: "Others",
    icon: "circle-info",
    children: [
      {
        text: "Cookbook",
        icon: "signs-post",
        prefix: "/cookbook/",
        children: ["markdown/", "vuepress/"],
      },
      "/changelog",
      "/migration/",
      "/contribution",
      {
        text: "Plugins",
        icon: "puzzle-piece",
        children: [
          {
            text: "Auto catalog Plugin",
            icon: "network-wired",
            link: linkHelper("auto-catalog"),
          },
          {
            text: "Blog Plugin",
            icon: "blog",
            link: linkHelper("blog2"),
          },
          {
            text: "Comment Plugin",
            icon: "comment",
            link: linkHelper("comment2"),
          },
          {
            text: "Components Plugin",
            icon: "puzzle-piece",
            link: linkHelper("components"),
          },
          {
            text: "Copy Code Plugin",
            icon: "copy",
            link: linkHelper("copy-code2"),
          },
          {
            text: "Copyright Plugin",
            icon: "copyright",
            link: linkHelper("copyright2"),
          },
          {
            text: "Feed Plugin",
            icon: "rss",
            link: linkHelper("feed2"),
          },
          {
            text: "LightGallery Plugin",
            icon: "image",
            link: linkHelper("lightgallery"),
          },
          {
            text: "Markdown Enhance Plugin",
            icon: "fab fa-markdown",
            link: linkHelper("md-enhance"),
          },
          {
            text: "Photo Swipe Plugin",
            icon: "image",
            link: linkHelper("photo-swipe"),
          },
          {
            text: "PWA Plugin",
            icon: "mobile",
            link: linkHelper("pwa2"),
          },
          {
            text: "Reading Time Plugin",
            icon: "book-open",
            link: linkHelper("reading-time2"),
          },
          {
            text: "Remove PWA Plugin",
            icon: "trash-can",
            link: linkHelper("remove-pwa"),
          },
          {
            text: "Redirect Plugin",
            icon: "fas fa-eject fa-rotate-90",
            link: linkHelper("redirect"),
          },
          {
            text: "Sass Palette Plugin",
            icon: "palette",
            link: linkHelper("sass-palette"),
          },
          {
            text: "Client Search Plugin",
            icon: "search",
            link: linkHelper("search-pro"),
          },
          {
            text: "Seo Plugin",
            icon: "wrench",
            link: linkHelper("seo2"),
          },
          {
            text: "VuePress shared",
            icon: "toolbox",
            link: linkHelper("shared"),
          },
          {
            text: "Sitemap Plugin",
            icon: "sitemap",
            link: linkHelper("sitemap2"),
          },
        ],
      },
    ],
  },
]);
