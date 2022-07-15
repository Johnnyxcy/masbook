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

// import { INotebookCell /* ICodeCellLanguageType, isCodeCell */ } from "@masbook/model/cells";
// import { createSlice, PayloadAction, SliceCaseReducers } from "@reduxjs/toolkit";
// import { WritableDraft } from "immer/dist/types/types-external";

// export interface INotebookModel {
//   cells: INotebookCell[];
// }

// interface ICellIndexerPayload {
//   cellIndex: number;
// }

// export interface IChangeCellValuePayload extends ICellIndexerPayload {
//   value: string;
// }

// export interface IChangeCodeCellLanguagePayload extends ICellIndexerPayload {
//   languageId: ICodeCellLanguageType;
// }

// export function createNotebookReducer(uuid: string, initialState: INotebookModel) {
//   const slice = createSlice({
//     name: `notebook${uuid}`,
//     initialState,
//     reducers: {
//       /**
//        * Update cell value
//        * @param state current state
//        * @param action cell index with the value to update
//        */
//       changeCellValue: (
//         state: WritableDraft<INotebookModel>,
//         action: PayloadAction<IChangeCellValuePayload>,
//       ) => {
//         const { value, cellIndex } = action.payload;
//         state.cells[cellIndex].value = value;
//       },

//       /**
//        * Change the language of a code cell, if the cell is not a code cell, do nothing
//        * @param state current state
//        * @param action cell index with the languageId to update
//        */
//       changeCodeCellLanguage: (
//         state: WritableDraft<INotebookModel>,
//         action: PayloadAction<IChangeCodeCellLanguagePayload>,
//       ) => {
//         const { languageId, cellIndex } = action.payload;
//         const cell = state.cells[cellIndex];
//         if (isCodeCell(cell)) {
//           cell.languageId = languageId;
//         }
//       },
//     },
//   });

//   return {
//     actions: slice.actions,
//     reducer: slice.reducer,
//   };
// }
