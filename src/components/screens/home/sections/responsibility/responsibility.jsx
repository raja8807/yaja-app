import React from "react";
import styles from "./responsibility.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import { Image } from "react-bootstrap";
import fonts from "@/styles/fonts";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { motion } from "framer-motion";

const ResponsibilitySection = () => {
  return (
    <section className={styles.responsibilitySection}>
      <div className={styles.bg} />
      <SectionHeading head="Our Responsibility" variant={1} />
      <div className={`${styles.board} ${styles.left}`}>
        <Image src="/assets/svg/tree-board.svg" alt="tree-board" fluid />
        <motion.div
          className={styles.bird}
          animate={{
            x: [0, 10, 0],
            transition: {
              repeat: Infinity,
              duration: 1,
            },
          }}
        >
          <Image src="/assets/mascots/bird.png" alt="tree-board" fluid />
        </motion.div>
        <p className={fonts.sofadi}>Mission</p>
      </div>
      <CustomContainer>
        <div className={styles.text}>
          <p className={fonts.sofadi}>
            &quot;To create a diverse portfolio of food products that excite the
            taste buds, ignite the imagination, and cater to the evolving needs
            and desires of our customers.&quot; &quot;To champion sustainability
            and transparency, sourcing ingredients ethically and minimizing our
            environmental footprint at every step of the journey.&quot; &quot;To
            foster a culture of creativity and experimentation, constantly
            pushing the boundaries of what&apos;s possible in the realm of food
            innovation.&quot;
          </p>
        </div>
      </CustomContainer>
      <div className={`${styles.board} ${styles.right}`}>
        <Image src="/assets/svg/tree-board.svg" alt="tree-board" fluid />
        <motion.div
          className={styles.bird}
          animate={{
            x: [0, 10, 0],
            transition: {
              repeat: Infinity,
              duration: 1,
            },
          }}
        >
          <Image src="/assets/mascots/bird.png" alt="tree-board" fluid />
        </motion.div>
        <p className={fonts.sofadi}>Vision</p>
      </div>
      <CustomContainer>
        <div className={styles.text}>
          <p className={fonts.sofadi}>
            &quot;To be the driving force behind a food revolution, where every
            bite is an experience, every meal a celebration, and every product a
            testament to innovation and inclusivity&quot;
          </p>
        </div>
      </CustomContainer>
    </section>
  );
};

export default ResponsibilitySection;
