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

export const addChatMenu = (theme: Theme) => css`
  width: 100%;
  ${flexGenerator()};

  ${fontGenerator("1.6rem")};
  padding: 1rem;
  margin-bottom: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: 0.3s;

  background-color: ${theme.color.primary03};

  &:hover {
    background-color: ${theme.color.primary02};
    color: ${theme.color.white};
  }
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

export const modalContainer = css`
  position: relative;
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

export const modalSpinner = css`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  ${flexGenerator()};
  background-color: rgba(0, 0, 0, 0.15);
`;
