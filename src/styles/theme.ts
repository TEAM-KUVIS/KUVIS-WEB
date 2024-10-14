const theme = {
  color: {
    primary01: "#FFF8E8",
    primary02: "#F7EED3",
    primary03: "#AAB396",
    primary04: "#FFF8E8",

    white: "#FFFFFF",
    black: "#17171A",

    bg_white01: "#F8F9FC",
    bg_white02: "#F3F5FB",
    lightgray1: "#EDEEF2",
    lightgray2: "#DFE2E7",
    lightgray3: "#C6CAD4",
    midgray1: "#9FA4AE",
    midgray2: "#6B6F77",
    darkgray: "#3E3F45",
    blackgray: "#222224",

    maroon: "#800000",
    red: "#FF0000",
    purple: "#800080",
    fuchsia: "#FF00FF",
    green: "#008000",
    lime: "#00FF00",
    olive: "#808000",
    yellow: "#FFFF00",
    navy: "#000080",
    blue: "#0000FF",
    teal: "#008080",
    aqua: "#00FFFF",
  },
};

export type ColorType = typeof theme.color;

export interface ThemeType {
  color: ColorType;
}

export default theme;
