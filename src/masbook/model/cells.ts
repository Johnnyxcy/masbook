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

interface IBaseCell {
  value: string;
}

/**
 * List of supported cell language
 */
export type ICodeLanguageType =
  | "text"
  | "markdown"
  | "python"
  | "R"
  | "javascript"
  | "typescript"
  | "cpp";

export interface ICodeCell extends IBaseCell {
  output: string;
}

export interface IMarkdownCell extends IBaseCell {}

export type INotebookCell = ICodeCell | IMarkdownCell;

/**
 * Identify if the notebook cell is a code cell
 * @param notebookCell cell
 * @returns cell is a code cell
 */
export function isCodeCell(notebookCell: INotebookCell): notebookCell is ICodeCell {
  return !!(notebookCell as ICodeCell).output;
}

/**
 * Identify if the notebook cell is a markdown cell
 * @param notebookCell cell
 * @returns cell is a markdown cell
 */
export function isMarkdownCell(notebookCell: INotebookCell): notebookCell is IMarkdownCell {
  return !isCodeCell(notebookCell);
}
