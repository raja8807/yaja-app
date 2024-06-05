import React from "react";
import styles from "./fun.module.scss";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import CustomContainer from "@/components/ui/custom_container/custom_container";
import { Col, Image, Row } from "react-bootstrap";
import {motion} from 'framer-motion'
import fonts from "@/styles/fonts";

const FunSection = () => {
  return (
    <section className={styles.funSection}>
      <CustomContainer>
        <SectionHeading head="CEO Of the Jungle" variant={1} />
        <CustomContainer>
          <div className={styles.cont}>
            <div className={styles.in}>
              <motion.div className={styles.bird}
              animate={{
                rotateZ:[0,-80,0,-80,0],
                transition:{
                  duration:0.5,
                  repeat:Infinity,
                  repeatDelay:2
                }
              }}
              >
                <Image src="/assets/svg/bird2.svg" alt="bird2" fluid />
              </motion.div>
              <Row>
                <Col xs={12} md={4}>
                  <Image src="/images/ceo.jpeg" alt="avatar" fluid className={styles.img}/>
                </Col>
                <Col xs={12} md={8}>
                  <h4 className={fonts.MainFont}>Lorem, ipsum.</h4>
                  <p className={fonts.MainFont}>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Blanditiis quas quibusdam aliquid deleniti culpa
                    consequuntur. Porro assumenda voluptates autem consectetur
                    aliquam, esse velit corporis recusandae ipsum. Unde impedit
                    soluta, dolores dolorem excepturi repellendus facilis nisi
                    reiciendis quis architecto quia expedita, autem, ad ab.
                    Aliquid ipsam optio, repellat laudantium nisi ab.
                  </p>
                  <br />
                  <p className={fonts.MainFont}>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vitae earum ad consectetur sequi atque? Fugiat atque libero
                    perferendis natus commodi illum ullam laudantium odio
                    delectus?
                  </p>
                </Col>
              </Row>
            </div>
          </div>
        </CustomContainer>
      </CustomContainer>
    </section>
  );
};

export default FunSection;
