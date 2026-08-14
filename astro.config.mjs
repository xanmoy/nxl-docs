import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

export default defineConfig({
  integrations: [
    starlight({
      title: "NXL",
      description:
        "A simple, expressive programming language built from scratch in Rust.",

      logo: {
        src: "./src/assets/NXL.png",
        alt: "NXL",
        replacesTitle: true,
      },
        favicon: "/favicon.ico",


      social: [
        {
          icon: "github",
          label: "GitHub",
          href: "https://github.com/xanmoy/nxl",
        },
      ],

      sidebar: [
        {
          label: "Getting Started",
          items: [
            {
              autogenerate: {
                directory: "getting-started",
              },
            },
          ],
        },
        {
          label: "Learn NXL",
          items: [
            {
              autogenerate: {
                directory: "learn",
              },
            },
          ],
        },
        {
          label: "Language",
          items: [
            {
              autogenerate: {
                directory: "language",
              },
            },
          ],
        },
        {
          label: "Internals",
          items: [
            {
              autogenerate: {
                directory: "internals",
              },
            },
          ],
        },
        {
          label: "Reference",
          items: [
            {
              autogenerate: {
                directory: "reference",
              },
            },
          ],
        },
        {
          label: "Contributing",
          items: [
            {
              autogenerate: {
                directory: "contributing",
              },
            },
          ],
        },
      ],
    }),
  ],
});
