import React from "react";
import styles from "./section_heading.module.scss";
import fonts from "@/styles/fonts";
import { Image } from "react-bootstrap";
import CssFilterConverter from "css-filter-converter";
import { COLORS } from "@/constants/styles";

const SectionHeading = ({ head = "", variant = 3 }) => {
  const getIngStyle = () => {
    return {
      filter: CssFilterConverter.hexToFilter(COLORS[`color_j${variant}`]).color,
    };
  };

  return (
    <div className={`${styles.sectionHead} ${styles[`v${variant}`]}`}>
      {head && (
        <div>
          <h1 className={fonts.sofadi}>{head.toUpperCase()}</h1>
          <Image
            style={getIngStyle()}
            src="/assets/svg/stripe.svg"
            alt="stripe"
            fluid
            width={300}
          />
        </div>
      )}
    </div>
  );
};

export default SectionHeading;
