import { css, Theme } from "@emotion/react";

import { flexGenerator, fontGenerator } from "@styles/generator";

export const header = (theme: Theme) => css`
  width: 100%;
  height: 8rem;
  position: fixed;
  left: 0;
  background-color: ${theme.color.primary02};
  color: ${theme.color.white};
  padding: 0 3rem;
  ${flexGenerator("row", "space-between", "center")};
`;

export const headerSection = css`
  width: 33.33%;
  ${flexGenerator("row", "center", "center")};
`;

export const headerLeft = css`
  justify-content: flex-start;

  & > span {
    font-size: 3rem;
    font-weight: 600;
    cursor: pointer;
  }
`;

export const headerTitle = css`
  ${fontGenerator("3rem", "700")};
`;

export const headerRight = css`
  justify-content: flex-end;
`;
