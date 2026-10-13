import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: [
          "GPTBot",
          "ChatGPT-User",
          "Google-Extended",
          "PerplexityBot",
          "ClaudeBot",
          "Applebot",
          "Bingbot",
          "Googlebot",
        ],
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: "https://www.placeonix.com/sitemap.xml",
    host: "https://www.placeonix.com",
  };
}
