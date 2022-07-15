/*
 * MIT License
 *
 * Copyright (c) 2022 ${company}
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
import React from "react";
import { Spin } from "antd";
import { MarkdownItRenderService } from "@masbook/services/markdown/markdownItService";

import "@masbook/view/cells/markdown/multimarkdown.css";

export interface IRenderedMarkdownCellProps {
  value: string;
  onDoubleClick?: () => void | PromiseLike<void>;
  onRender?: (src: string) => string;
}

export function RenderedMarkdownCell(props: IRenderedMarkdownCellProps) {
  const { value, onDoubleClick, onRender } = props;

  const [isHover, setHover] = React.useState<boolean>(false);

  let mdRenderer: (src: string) => string;

  if (!onRender) {
    const markdownItRef = React.useRef(new MarkdownItRenderService());
    mdRenderer = markdownItRef.current.render;
  } else {
    mdRenderer = onRender;
  }

  const [renderedHTML, _setRenderedHTML] = React.useState<string | null>(null);

  React.useEffect(() => {
    _setRenderedHTML(null);
    const html = mdRenderer(value);
    _setRenderedHTML(html);
  }, [value]);

  return (
    <Spin spinning={renderedHTML === null} tip="Rendering...">
      <div
        style={{ padding: 20, border: `0.5px solid ${isHover ? "#4000ff" : "#cecece"}` }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <span
          className="masbook-multimarkdown"
          dangerouslySetInnerHTML={{ __html: renderedHTML ?? "" }}
          onDoubleClick={onDoubleClick}
        />
      </div>
    </Spin>
  );
}
