import {
  Outfit,
  Junge,
  Sofadi_One,
  Rowdies as HeadFont,
  Kaushan_Script,
} from "next/font/google";
// import { Inder as Be_Vietnam_Pro } from "next/font/google";

const outfit = Outfit({
  weight: ["400"],
  subsets: ["latin"],
});
const junge = Junge({
  weight: ["400"],
  subsets: ["latin"],
});
const sofadi = HeadFont({
  weight: ["400"],
  subsets: ["latin"],
});
const script = Kaushan_Script({
  weight: ["400"],
  subsets: ["latin"],
});

const fonts = {
  MainFont: outfit.className,
  junge: junge.className,
  sofadi: sofadi.className,
  script: script.className,
};
export default fonts;
