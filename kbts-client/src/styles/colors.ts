export const WHITE = "#FFFFFF";
export const BLACK1 = "#223047";
export const BLACK2 = "#151A23";
export const SUB_BLACK1 = "#282E34";
export const SUB_BLACK2 = "#3D4348";
export const SUB_BLACK3 = "#53585D";
export const GRAY1 = "#F4F5F6";
export const GRAY2 = "#E9EAED";
export const GRAY3 = "#D3D6DA";
export const GRAY4 = "#616A75";
export const LIGHT_GRAY = "#D8DCE0";
export const DARK_GRAY = "#32383E";
export const BLUE0 = "#2047C2";
export const BLUE1 = "#3680F7";
export const BLUE2 = "#E1ECFE";
export const BLUE3 = "#D5E9FD";
export const DARK_BLUE = "#1A2943";
export const RED0 = "#C12223";
export const RED1 = "#EA5A5B";
export const RED2 = "#FCE6E6";
export const RED3 = "#FDDBDB";
export const YELLOW0 = "#E38518";
export const YELLOW1 = "#FBB301";
export const YELLOW2 = "#FEF4D9";
export const GREEN0 = "#095C0D";
export const GREEN1 = "#28C82E";
export const GREEN2 = "#DFF7E0";

export const ColorTypeArray = [
  "white",
  "black1",
  "black2",
  "sub-black1",
  "sub-black2",
  "sub-black3",
  "gray1",
  "gray2",
  "gray3",
  "gray4",
  "light-gray",
  "dark-gray",
  "blue0",
  "blue1",
  "blue2",
  "blue3",
  "dark-blue",
  "red0",
  "red1",
  "red2",
  "red3",
  "yellow0",
  "yellow1",
  "yellow2",
  "green0",
  "green1",
  "green2",
] as const;
export type ColorType = typeof ColorTypeArray[number];

export const colorPicker = (color?: ColorType) => {
  switch (color) {
    case "white":
      return WHITE;
    case "black1":
      return BLACK1;
    case "black2":
      return BLACK2;
    case "sub-black1":
      return SUB_BLACK1;
    case "sub-black2":
      return SUB_BLACK2;
    case "sub-black3":
      return SUB_BLACK3;
    case "gray1":
      return GRAY1;
    case "gray2":
      return GRAY2;
    case "gray3":
      return GRAY3;
    case "gray4":
      return GRAY4;
    case "light-gray":
      return LIGHT_GRAY;
    case "dark-gray":
      return DARK_GRAY;
    case "blue0":
      return BLUE0;
    case "blue1":
      return BLUE1;
    case "blue2":
      return BLUE2;
    case "blue3":
      return BLUE3;
    case "dark-blue":
      return DARK_BLUE;
    case "red0":
      return RED0;
    case "red1":
      return RED1;
    case "red2":
      return RED2;
    case "red3":
      return RED3;
    case "yellow0":
      return YELLOW0;
    case "yellow1":
      return YELLOW1;
    case "yellow2":
      return YELLOW2;
    case "green0":
      return GREEN0;
    case "green1":
      return GREEN1;
    case "green2":
      return GREEN2;
    default:
      return BLACK1;
  }
};
