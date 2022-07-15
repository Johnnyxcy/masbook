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

import { ICodeLanguageType } from "@masbook/model/cells";
// import { createNotebookReducer } from "@masbook/model/notebook";
// import { IApi } from "@masbook/services/api";
import { CodeCell } from "@masbook/view/cells/code/CodeCell";
import { Layout, Space, Input } from "antd";
import React from "react";

export interface IMasbookRef {
  changeLanguage: (languageId: ICodeLanguageType) => void;
  runAll: () => void;
  clearAllOutputs: () => void;
}

export interface IMasbookProps {
  ref: IMasbookRef;
  languageId: ICodeLanguageType;
}

export function Masbook(props: IMasbookProps) {
  // const { itemId, api } = props;

  // React.useEffect(() => {
  //   const init = async () => {
  //     return await api.notebook.getNotebookData(itemId);
  //   };
  //   init().then((data) => {
  //     createNotebookReducer(itemId, data);
  //   });
  // }, [itemId, api]);

  const s = "import numpy as np\n\ndef sqrt(x: float) -> float:\n\treturn np.sqrt(x)";
  return (
    <>
      <CodeCell defaultValue={s} languageId="python" />
      <br />
      <CodeCell defaultValue="" languageId="python" />
    </>
  );
}
