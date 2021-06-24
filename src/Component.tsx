import * as React from "react";

interface TestComponentProps {
  color: string;
}

export function TestComponent({ color }: TestComponentProps): JSX.Element | null {
  return <div style={{ color }}>Hello</div>;
}
