import { act, render, RenderResult } from '@testing-library/react';

export const asyncRender: (Component: JSX.Element) => Promise<RenderResult> = async (Component) => {
  let rendered: RenderResult;

  await act(async () => {
    rendered = render(Component);
  });

  return rendered!;
};
