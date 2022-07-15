declare module "markdown-it-table-of-contents" {
  import type { MarkdownIt } from "markdown-it";
  interface Options {
    includeLevel: number[];
    containerClass: string;
    markerPattern: RegExp;
    listType: "ul" | "ol";
  }
  export default function (md: MarkdownIt, options?: Partial<Options>): void;
}
