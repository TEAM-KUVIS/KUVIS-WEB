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
  background-color: ${theme.color.primary03};
  padding: 1rem;
  border-radius: 1rem;
`;

export const questionText = css`
  ${fontGenerator("1.6rem", "400", "140%")};
  width: 100%;
`;

export const answerContainer = css`
  width: 100%;
  ${flexGenerator("row", "flex-end", "center")}
`;

export const answerText = css`
  width: 100%;
  line-height: 1.6;
  font-family: Arial, sans-serif; /* 기본 폰트 설정 */
  color: #333; /* 기본 텍스트 색상 */

  h1 {
    font-size: 3rem; /* 30px */
    font-weight: 700; /* Bold */
    color: #222; /* 좀 더 진한 색상 */
    margin-top: 1.5rem; /* 15px */
    margin-bottom: 1rem; /* 10px */
  }

  h2 {
    font-size: 2.5rem; /* 25px */
    font-weight: 600; /* Semi-bold */
    color: #333;
    margin-top: 1.25rem; /* 12.5px */
    margin-bottom: 0.75rem; /* 7.5px */
  }

  h3 {
    font-size: 2rem; /* 20px */
    font-weight: 500; /* Normal bold */
    color: #444;
    margin-top: 1rem; /* 10px */
    margin-bottom: 0.5rem; /* 5px */
  }

  ul {
    margin-left: 1.5rem; /* 15px */
    padding-left: 1rem; /* 10px */
    font-size: 1.6rem; /* 16px */
  }

  li {
    font-size: 1.6rem; /* 16px */
    font-weight: 400;
    color: #555;
    margin-bottom: 0.5rem; /* 5px */
  }

  code {
    background-color: #f4f4f4;
    padding: 0.2rem 0.4rem; /* 2px 4px */
    border-radius: 3px;
    font-family: "Courier New", monospace;
    font-size: 1.4rem; /* 14px */
    font-weight: 400;
    color: #d63384;
  }

  pre {
    background-color: #f4f4f4;
    padding: 1rem; /* 10px */
    border-radius: 5px;
    overflow-x: auto;
    font-family: "Courier New", monospace;
    font-size: 1.4rem; /* 14px */
    color: #333;
    line-height: 1.5;
  }

  p {
    font-size: 1.6rem; /* 16px */
    font-weight: 400;
    margin-bottom: 1rem; /* 10px */
    color: #333;
  }

  strong {
    font-weight: 700;
  }

  em {
    font-style: italic;
  }

  blockquote {
    border-left: 4px solid #ccc;
    margin: 1.5rem 0; /* 15px 0 */
    padding: 0.5rem 1rem; /* 5px 10px */
    color: #666;
    background-color: #f9f9f9;
    font-size: 1.8rem; /* 18px */
  }

  a {
    color: #007bff;
    text-decoration: underline;
  }
`;
