import { useEffect, useState } from "react";
import styles from "./tag_line.module.scss";
import { COLORS } from "@/constants/styles";

import { motion } from "framer-motion";
import { Image } from "react-bootstrap";
import fonts from "@/styles/fonts";

// import { Playb as TagFont } from "next/font/google";

// const font = TagFont({
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
//   subsets: ["latin"],
// });

const TagLine = () => {
  const [clrs, setClrs] = useState([
    COLORS.color_j2,
    COLORS.color_j4,
    COLORS.color_j3,
  ]);

  useEffect(() => {
    setInterval(() => {
      setClrs((prev) => {
        const x = [...prev];
        x[0] = prev[2];
        x[1] = prev[0];
        x[2] = prev[1];
        return x;
      });
    }, 500);
  }, []);

  return (
    <div
      className={styles.tag}
      onMouseEnter={(e) => {
        e.stopPropagation();
        e.preventDefault();
      }}
    >
      {/* <motion.div
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ ease: "easeIn", delay: 0.4, duration: 0.2 }}
      >
        <Image src="/logo/logo.png"  alt="logo" width={300}/>
      </motion.div> */}
      <h1 className={fonts.sofadi}>
        <motion.span
          style={{ color: clrs[0] }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeIn", delay: 0.4, duration: 0.2 }}
        >
          Welcome
        </motion.span>
        <motion.span
          style={{ color: clrs[1] }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeIn", delay: 0.6, duration: 0.2 }}
          className={styles.to}
        >
          TO The
        </motion.span>
        <motion.span
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ ease: "easeIn", delay: 0.8, duration: 0.2 }}
          style={{ color: clrs[2] }}
        >
          Jungle
        </motion.span>
      </h1>
    </div>
  );
};

export default TagLine;
