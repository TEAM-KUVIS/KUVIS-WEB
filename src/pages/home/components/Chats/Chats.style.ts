import { css, Theme } from "@emotion/react";

import { flexGenerator, fontGenerator } from "@styles/generator";

export const chatContainer = css`
  width: 100%;
  ${flexGenerator("column", "flex-end", "flex-end")};
  gap: 2rem;
`;

export const questionContainer = (theme: Theme) => css`
  max-width: 50%;
  ${flexGenerator("row", "flex-end", "center")};
  background-color: ${theme.color.primary04};
  padding: 1rem;
  border-radius: 1rem;
`;

export const questionText = css`
  ${fontGenerator("1.8rem", "400", "140%")};
  width: 100%;
`;

// ----------------------------------------

export const answerContainer = css`
  width: 100%;
  ${flexGenerator("row", "flex-end", "center")}
`;

export const answerText = css`
  ${fontGenerator("1.8rem", "400", "140%")};
  width: 100%;
`;
