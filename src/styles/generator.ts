import { css } from "@emotion/react";

const PretendardFont = css`
  font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
`;

export const flexGenerator = (
  flexDirection = "row",
  justifyContent = "center",
  alignItems = "center"
) => css`
  display: flex;
  flex-direction: ${flexDirection};
  justify-content: ${justifyContent};
  align-items: ${alignItems};
`;

export const fontGenerator = (
  fontSize = "1.6rem",
  fontWeight = "normal",
  lineHeight = "normal",
  letterSpacing = "normal",
  fontStyle = "normal"
) => css`
  ${PretendardFont};
  font-size: ${fontSize};
  font-weight: ${fontWeight};
  line-height: ${lineHeight};
  letter-spacing: ${letterSpacing};
  font-style: ${fontStyle};
`;
