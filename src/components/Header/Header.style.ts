import { css, Theme } from "@emotion/react";

import { flexGenerator, fontGenerator } from "@styles/generator";

export const header = (theme: Theme) => css`
  width: 100%;
  height: 6rem;
  position: fixed;
  left: 0;
  background-color: ${theme.color.primary01};
  color: ${theme.color.white};
  padding: 0 3rem;
  ${flexGenerator("row", "flex-start", "center")};
  gap: 3rem;

  & > span {
    cursor: pointer;
  }
`;

export const headerTitle = css`
  ${fontGenerator("2.4rem", "700")};
`;

