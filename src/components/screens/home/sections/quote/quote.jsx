import React from "react";
import styles from "./quote.module.scss";
import fonts from "@/styles/fonts";
import CustomContainer from "@/components/ui/custom_container/custom_container";

const QuoteSection = () => {
  return (
    <section className={styles.quoteSection}>
      <CustomContainer>
        <quote className={fonts.script}>
          &quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Assumenda veritatis nulla iure ex quaerat id consequatur doloremque,
          incidunt eaque perspiciatis accusantium, eos quasi nisi expedita
          tenetur facere soluta optio dolore?&quot;
        </quote>
      </CustomContainer>
    </section>
  );
};

export default QuoteSection;
