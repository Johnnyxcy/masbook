/*
 * MIT License
 *
 * Copyright (c) 2022 Chongyi Xu
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy of
 * this software and associated documentation files (the "Software"), to deal in
 * the Software without restriction, including without limitation the rights to use,
 * copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
 * Software, and to permit persons to whom the Software is furnished to do so,
 * subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
 * FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
 * COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN
 * AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH
 * THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 */
import MarkdownIt from "markdown-it";
import MarkdownItTaskLists from "markdown-it-task-lists";
import multimd_table_plugin from "markdown-it-multimd-table";
import MarkdownItToc from "markdown-it-table-of-contents";
import { IMarkdownRenderService } from "@masbook/services/markdown/markdown";

export class MarkdownItRenderService implements IMarkdownRenderService {
  private readonly engine: MarkdownIt;

  constructor() {
    this.engine = new MarkdownIt({ html: true })
      .use(multimd_table_plugin, {
        multiline: true,
        rowspan: true,
      })
      .use(MarkdownItTaskLists)
      .use(MarkdownItToc);
  }

  render = (markdown: string): string => {
    return this.engine.render(markdown);
  };
}
