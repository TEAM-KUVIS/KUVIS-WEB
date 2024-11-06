import { css, Theme } from "@emotion/react";

import { flexGenerator, fontGenerator } from "@styles/generator";

export const mainWrapper = css`
  ${flexGenerator("row", "flex-start", "flex-start")};
`;

export const mainLayout = css`
  ${flexGenerator("column", "flex-end", "center")}
  gap: 2rem;
  flex: 1;
  height: 100dvh;
  padding: 8rem 10rem 2rem;
`;

export const chattingSection = css`
  ${flexGenerator("column", "flex-start", "center")};
  gap: 2rem;
  width: 100%;
  height: auto;
  overflow-y: auto;
`;

export const homeSpinner = css`
  margin-bottom: 1rem;
`;

export const formContainer = (theme: Theme) => css`
  width: 100%;
  min-height: 5rem;

  ${flexGenerator("row", "space-between")}
  position: relative;

  & > input:focus {
    button {
      background-color: ${theme.color.darkgray};
    }
  }
`;

export const formInput = (theme: Theme) => css`
  width: 100%;
  height: 100%;
  padding: 0 2rem;
  border: none;
  border: 1px solid ${theme.color.darkgray};
  border-radius: 2.5rem;
  ${fontGenerator("1.6rem")};
  &:focus {
    outline: none;
  }

  &:focus ~ button {
    background-color: ${theme.color.primary01};
    color: ${theme.color.white};
  }

  &:disabled {
    background-color: ${theme.color.lightgray2};
  }
`;

export const formButton = (theme: Theme) => css`
  ${flexGenerator()};
  position: absolute;
  right: 0.5rem;
  width: 4rem;
  height: 4rem;
  padding: 1rem;
  background-color: ${theme.color.white};
  color: #fff;
  border: none;
  border: 1px solid ${theme.color.darkgray};
  color: ${theme.color.darkgray};
  border-radius: 50%;
  cursor: pointer;
  z-index: 2;

  transition: background-color 0.3s, color 0.3s;
`;
