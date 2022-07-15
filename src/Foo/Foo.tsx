import React from "react";
import { Button, Card } from "antd";

export interface IFooProps {
  content: string;
}

export function Foo(props: IFooProps) {
  const { content } = props;
  return (
    <Card title="This is a demo" extra={<Button>Click Me</Button>}>
      {content}
    </Card>
  );
}
