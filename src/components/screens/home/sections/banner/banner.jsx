import React from "react";
import styles from "./banner.module.scss";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import fonts from "@/styles/fonts";
import FloatingBottle from "@/components/floating_bottle/floating_bottle";
import { Image } from "react-bootstrap";
import { motion } from "framer-motion";
import appPack from '../../../../../../package.json'

const BannerSection = () => {
  return (
    <div className={styles.bannerSection}>
      <Image
        src="/assets/svg/animals.svg"
        alt="animals"
        fluid
        className={styles.animals}
      />
      {/* <FloatingBottle /> */}
      {/* <TagLine/> */}
      <>
        <div className="content-wrapper">
          <div className="section-hero">
            <div className="container w-container">
              <div
                style={{
                  transform:
                    "translate3d(0px, 0px, 0px) scale3d(1, 1, 1) rotateX(0deg) rotateY(0deg) rotateZ(0deg) skew(0deg, 0deg)",
                  opacity: 1,
                  transformStyle: "preserve-3d",
                }}
                className="hero-wrap"
              ></div>
              <div className="hero-assets">
                <div className="texture-1" />
                <div className="top-assets">
                  <Image
                    src="https://assets.website-files.com/64f543aacc333d6bdd537ea8/64f543aacc333d6bdd537ec1_leaf%20top-xs.svg"
                    loading="lazy"
                    alt=""
                    className="top-image"
                  />
                  <Image
                    src="https://assets.website-files.com/64f543aacc333d6bdd537ea8/64f543aacc333d6bdd537eb0_shadow%20top%20-%202.svg"
                    loading="lazy"
                    alt=""
                    className="top-shadow"
                  />
                </div>
                <div className="left-assets">
                  <Image
                    src="https://assets.website-files.com/64f543aacc333d6bdd537ea8/64f543aacc333d6bdd537eb9_leaf%20left-1.svg"
                    loading="lazy"
                    alt=""
                    className="left-top-image"
                  />
                  <motion.img
                    animate={{
                      x: [
                        0, 5, -5, 5, -5, 5, -5, 10, -10, 10, -5, 5, -5, 5, -5,
                        0,
                      ],
                      y: [0, 1, -1],
                      rotateZ: [0, 2, 0, -2, 0],

                      transition: {
                        repeat: Infinity,
                        duration: 5,
                        ease: "easeInOut",
                        // repeatDelay: 2,
                      },
                    }}
                    src="https://assets.website-files.com/64f543aacc333d6bdd537ea8/64f543aacc333d6bdd537ec2_leaf%20left-2.svg"
                    loading="lazy"
                    alt=""
                    className="left-image"
                  />
                  <Image
                    src="https://assets.website-files.com/64f543aacc333d6bdd537ea8/64f543aacc333d6bdd537eb8_orchid%201-xs.svg"
                    loading="lazy"
                    alt=""
                    className="left-orchid"
                  />
                  <Image
                    src="https://assets.website-files.com/64f543aacc333d6bdd537ea8/64f543aacc333d6bdd537eb7_leaf%20shadow%20left.svg"
                    loading="lazy"
                    alt=""
                    className="left-shadow"
                  />
                  <div className="line-1" />
                </div>
                <div className="right-assets">
                  <Image
                    src="https://assets.website-files.com/64f543aacc333d6bdd537ea8/64f543aacc333d6bdd537eb3_leaf%20right-1.svg"
                    loading="lazy"
                    alt=""
                    className="right-top-image"
                  />
                  <motion.img
                    animate={{
                      x: [0, 2, -1, 0],
                      rotateZ: [0, 2, 0, -2, 0],
                      transition: {
                        repeat: Infinity,
                        duration: 0.5,
                        ease: "easeInOut",
                      },
                    }}
                    src="https://assets.website-files.com/64f543aacc333d6bdd537ea8/64f543aacc333d6bdd537eb1_leaf%20right-2.svg"
                    loading="lazy"
                    alt=""
                    className="right-image"
                  />
                  <Image
                    src="https://assets.website-files.com/64f543aacc333d6bdd537ea8/64f543aacc333d6bdd537eb8_orchid%201-xs.svg"
                    loading="lazy"
                    alt=""
                    className="right-orchid"
                  />
                  <Image
                    src="https://assets.website-files.com/64f543aacc333d6bdd537ea8/64f543aacc333d6bdd537ebb_leaf%20shadow%20right.svg"
                    loading="lazy"
                    alt=""
                    className="right-shadow"
                  />
                  <div className="line-2" />
                </div>
                <Image
                  src="https://assets.website-files.com/64f543aacc333d6bdd537ea8/64f543aacc333d6bdd537eab_texture%202.svg"
                  loading="lazy"
                  alt=""
                  className="texture-2"
                />
                <p style={{color:'white'}}> version {appPack.version}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default BannerSection;
