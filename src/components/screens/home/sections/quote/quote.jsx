import React from "react";
import styles from "./quote.module.scss";
import fonts from "@/styles/fonts";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const QuoteSection = () => {
  return (
    <section className={styles.quoteSection}>
      <CustomContainer>
        <quote className={fonts.script}>
          &quot;At Yaja, we&apos;re more than just food creators;
          we&apos;re dreamers, innovators, and believers in a tastier, healthier
          future. With each bite, you&apos;re not just enjoying a product, but
          joining a movement towards better living. Welcome to a world where
          every meal is an adventure, and every choice is a step towards a
          brighter tomorrow. Thank you for being a part of our journey&quot;
        </quote>
      </CustomContainer>
    </section>
  );
};

export default QuoteSection;
