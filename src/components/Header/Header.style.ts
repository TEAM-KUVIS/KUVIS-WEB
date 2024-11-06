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

export const modalContainer = css`
  width: 40rem;
  height: 25rem;
  padding: 2rem;
  background-color: #f0f0f0;
  border-radius: 2rem;
  ${flexGenerator("column", "center", "center")};
  gap: 2rem;
`;

export const nameInput = css`
  width: 100%;
  height: 5rem;
  padding: 0 2rem;
  border: none;
  border: 1px solid #112d4e;
  border-radius: 1rem;
  ${fontGenerator("1.6rem")};
  &:focus {
    outline: none;
  }
`;

export const fileInput = css`
  width: 100%;
  height: 5rem;
  padding: 1.3rem;
  border: none;
  border: 1px solid #112d4e;
  border-radius: 1rem;
  &:focus {
    outline: none;
  }
`;

export const modalButton = (theme: Theme) => css`
  width: 100%;
  height: 5rem;
  padding: 0 2rem;
  border: none;
  border: 1px solid #112d4e;
  border-radius: 1rem;
  ${fontGenerator("1.6rem")};
  cursor: pointer;
  color: ${theme.color.white};
  background-color: ${theme.color.primary02};
  transition: background-color 0.3s;

  &:hover {
    background-color: ${theme.color.primary01};
  }
`;
