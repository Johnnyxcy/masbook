# CodeCell

Code Cell is a single cell to represent a block of code with an execute icon

For example a basic python code block

```tsx
import React from "react";
import { Cells } from "masbook";

const somePythonCode = `# This is a test python code block
import numpy as np

def test_greater(val: int, compare_to: int) -> bool:
  if val > compare_to:
    return False
  else:
    return True
`;

export default () => <Cells.CodeCell defaultValue={somePythonCode} languageId="python" />;
```

- `autoFocus={True}` can auto focus the code editor

```tsx
import React from "react";
import { Cells } from "masbook";

const somePythonCode = `# This is a test python code block
import numpy as np

def test_greater(val: int, compare_to: int) -> bool:
  if val > compare_to:
    return False
  else:
    return True
`;

export default () => <Cells.CodeCell defaultValue={somePythonCode} languageId="python" autoFocus />;
```

- `languageId` parameter indicate the langauge type

```tsx
import React from "react";
import { Cells } from "masbook";

const somePythonCode = `# This is a test python code block
import numpy as np

def test_greater(val: int, compare_to: int) -> bool:
  if val > compare_to:
    return False
  else:
    return True
`;

const someMarkdownCode = `# Demo Markdown

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

| A | B |
| - | - |
| 1 | 2 |
| 3 45 ||
`;

export default () => (
  <>
    <Cells.CodeCell defaultValue={somePythonCode} languageId="python" />
    <br />
    <Cells.MarkdownCell defaultValue={someMarkdownCode} />
  </>
);
```
