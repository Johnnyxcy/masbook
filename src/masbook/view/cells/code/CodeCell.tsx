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
import * as monaco from "monaco-editor";
import { ICodeLanguageType } from "@masbook/model/cells";
import { Row, Col, Space, Button } from "antd";
import { CaretRightOutlined, DeleteOutlined } from "@ant-design/icons";

const { editor } = monaco;

export interface ICodeCellProps {
  defaultValue: string;
  languageId: ICodeLanguageType;
  autoFocus?: boolean;
  onComplete?: (value: string) => void | PromiseLike<void>;
  onExecute?: (value: string) => void | PromiseLike<void>;
  onDelete?: () => void | PromiseLike<void>;

  minHeight?: number;
}

export function CodeCell(props: ICodeCellProps) {
  const { defaultValue, languageId, autoFocus, onComplete, onExecute, onDelete } = props;
  const [cellHeight, _setCellHeight] = React.useState<number>(props.minHeight ?? 200);
  const [active, setActive] = React.useState<boolean>(false);

  /**
   * These refs are used to wrap monaco editor configurations
   */
  const domRef = React.useRef<HTMLDivElement | null>(null);
  const textModelRef = React.useRef<monaco.editor.ITextModel | null>(null);
  const editorRef = React.useRef<monaco.editor.IStandaloneCodeEditor | null>(null);

  const onCompleteCallback = () => {
    setActive(false);
    if (textModelRef.current && onComplete) {
      onComplete(textModelRef.current.getValue());
    }
  };

  /**
   * didMount
   */
  React.useEffect(() => {
    if (!domRef.current) {
      return;
    }

    textModelRef.current = editor.createModel(defaultValue, languageId);
    editorRef.current = editor.create(domRef.current, {
      model: textModelRef.current,
      automaticLayout: true,
      lineNumbers: "off",
      renderLineHighlight: "none",
      minimap: { enabled: false },
      scrollBeyondLastLine: false,
      scrollbar: { alwaysConsumeMouseWheel: false },
    });

    _setCellHeight(Math.max(editorRef.current.getContentHeight(), 200));

    const sizeChangedListener = editorRef.current.onDidContentSizeChange((e) => {
      if (e.contentHeightChanged) {
        _setCellHeight(Math.max(e.contentHeight, 200 /* 200px is minHeight */));
      }
    });

    if (autoFocus) {
      editorRef.current.focus();
    }
    return () => {
      sizeChangedListener.dispose();
      if (editorRef.current) {
        editorRef.current.dispose();
      }
    };
  }, []);

  /**
   * If languageId got updated
   */
  React.useEffect(() => {
    if (textModelRef.current) {
      editor.setModelLanguage(textModelRef.current, languageId);
    }
  }, [languageId]);

  const cellRef = React.useRef<HTMLDivElement>(null);
  return (
    <Row style={{ width: "100%" }} wrap={false} ref={cellRef}>
      <Col style={{ width: "40px" }}>
        <Space direction="vertical">
          <Button
            icon={<CaretRightOutlined />}
            title="Run"
            disabled={onExecute === undefined}
            onClick={() => {
              if (onExecute && textModelRef.current) {
                onExecute(textModelRef.current.getValue());
              }
            }}
          />
          <Button
            icon={<DeleteOutlined />}
            disabled={onDelete === undefined}
            title="Delete"
            onClick={onDelete}
          />
        </Space>
      </Col>
      <Col flex="auto">
        <div
          ref={domRef}
          style={{
            width: "100%",
            height: cellHeight + 24, // 24 px to padding bottom
            border: `0.5px solid ${active ? "#40a9ff" : "#cecece"}`,
          }}
          onFocus={() => setActive(true)}
          onBlur={onCompleteCallback}
        />
      </Col>
    </Row>
  );
}
