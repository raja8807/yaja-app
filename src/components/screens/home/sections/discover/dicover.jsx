import React from "react";
import styles from "./dicover.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import { Image } from "react-bootstrap";
import fonts from "@/styles/fonts";
import { hexToFilter } from "css-filter-converter";
import { COLORS } from "@/constants/styles";

const Product = () => {
  return (
    <div className={styles.p}>
      <Image
        className={styles.blob}
        src="assets/svg/blob1.svg"
        fluid
        alt="b1"
      />
      <Image className={styles.bottle} src="bottle.png" fluid alt="b1" />
      <div className={styles.name}>
        <p className={fonts.sofadi}>Lychee</p>
        <Image
          style={{
            filter: hexToFilter(COLORS.color_j2).color,
          }}
          src="/assets/svg/stripe2.svg"
          fluid
          alt="b1"
        />
      </div>
    </div>
  );
};

const DiscoverSection = () => {
  return (
    <section className={styles.discoverSection}>
      <div className={styles.bg} />
      <CustomContainer>
        <SectionHeading head="Discover our products" />
        <div className={styles.products}>
          <Product />
          <Product />
        </div>
      </CustomContainer>
    </section>
  );
};

export default DiscoverSection;
