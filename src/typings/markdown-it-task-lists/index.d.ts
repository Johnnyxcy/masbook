declare module "markdown-it-task-lists" {
  import type { MarkdownIt } from "markdown-it";
  interface Options {
    disableCheckboxes: boolean;
    useLabelWrapper: boolean;
    useLabelAfter: boolean;
  }
  export default function (md: MarkdownIt, options?: Partial<Options>): void;
}
