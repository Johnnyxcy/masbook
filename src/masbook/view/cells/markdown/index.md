# MarkdownCell

Markdown Cell is a single cell to represent a block of markdown syntax / rendered markdown

```tsx
import React from "react";
import { Cells } from "masbook";

const someMarkdownCode = `# Demo Markdown

[[TOC]]

## Demo Markdown Header2

### Demo code script

\`\`\`R
vec <- c(1, 2, 3)
\`\`\`


## Demo Markdown List

- Unordered 1
- Unordered 2

1. Ordered 1
2. Ordered 2

| Grouped ||
| A | B |
| - | - |
| 1 | 2 |

| 3 45 ||

`;

export default () => (
  <>
    <Cells.MarkdownCell defaultValue={someMarkdownCode} />
  </>
);
```

- use `readonly` to control the markdown cell to be a view only

```tsx
import React from "react";
import { Cells } from "masbook";

const someMarkdownCode = `# Demo Markdown

## Demo Readonly Markdown

## Demo Markdown List

- Unordered 1
- Unordered 2

1. Ordered 1
2. Ordered 2



| A | B |
| - | - |
| 1 | 2 |

| 3 45 ||

`;

export default () => (
  <>
    <Cells.MarkdownCell defaultValue={someMarkdownCode} readonly />
  </>
);
```
