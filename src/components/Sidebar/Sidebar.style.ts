import { css, Theme } from "@emotion/react";

import { flexGenerator, fontGenerator } from "@styles/generator";

export const sidebarContainer = (theme: Theme) => css`
  width: 25rem;
  height: 100dvh;
  padding: 8rem 1rem 2rem;
  background-color: ${theme.color.lightgray1};
`;

export const sidebarList = css`
  width: 100%;
  ${flexGenerator("column", "flex-start", "flex-start")};
  gap: 1rem;
`;

export const sidebarMenu = (selected: boolean) => (theme: Theme) =>
  css`
    width: 100%;
    ${fontGenerator("1.6rem")};
    padding: 1rem;
    border-radius: 0.5rem;
    cursor: pointer;
    transition: 0.3s;

    background-color: ${selected
      ? theme.color.lightgray3
      : theme.color.lightgray1};

    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;

    &:hover {
      background-color: ${theme.color.lightgray3};
    }
  `;
