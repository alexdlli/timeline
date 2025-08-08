import { css } from '@emotion/react';
import type { PropsWithChildren } from 'react';

export function Layout({ children }: PropsWithChildren) {
  return (
    <main
      css={css`
      justify-items: center;
      align-items: center;
      justify-content: center;
      padding: 16px;

      margin: 0 auto;
      background-color: transparent;
      `}
    >
      {children}
    </main>
  );
}
