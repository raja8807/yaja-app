import React from "react";
import styles from "./fun.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Image } from "react-bootstrap";
import CssFilterConverter from "css-filter-converter";
import { COLORS } from "@/constants/styles";

const FunSection = () => {
  return (
    <section className={styles.funSection}>
      <CustomContainer>
        <SectionHeading head="CEO Of the Jungle" variant={1} />
        <div className={styles.bg}>
          <Image
            style={{
              filter: CssFilterConverter.hexToFilter(COLORS.color_j5).color,
            }}
            className={styles.img}
            src="/assets/svg/back.svg"
            alt="back"
          />
        </div>
      </CustomContainer>
    </section>
  );
};

export default FunSection;
