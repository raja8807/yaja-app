import CustomContainer from "@/components/ui/custom_container/custom_container";
import SectionHeading from "@/components/ui/section_heading/section_heading";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import styles from "./specs.module.scss";
import fonts from "@/styles/fonts";

const Card = ({ data }) => {
  const { id, head, text } = data;

  return (
    <Col xs={12} md={6} lg={3}>
      <div className={styles.card}>
        <Image src={`/assets/specs/${id}.png`} alt="id" fluid width={120} />
        <h4 className={fonts.MainFont}>{head}</h4>
        <p className={fonts.MainFont}>{text}</p>
      </div>
    </Col>
  );
};

const SpecsSection = () => {
  const cards = [
    {
      id: "natural",
      head: "Chemical Free",
      text: "Ligula amet finibus porttitor dignissim maecenas curabitur sem eget eleifend commodo in.",
    },
    {
      id: "fatfree",
      head: "Healthy Fats",
      text: "Ligula amet finibus porttitor dignissim maecenas curabitur sem eget eleifend commodo in.",
    },
    {
      id: "eco",
      head: "Eco-Besties",
      text: "Ligula amet finibus porttitor dignissim maecenas curabitur sem eget eleifend commodo in.",
    },
    {
      id: "sugarfree",
      head: "Sugar Free",
      text: "Ligula amet finibus porttitor dignissim maecenas curabitur sem eget eleifend commodo in.",
    },
  ];

  return (
    <section className={styles.specs}>
      <CustomContainer>
        <SectionHeading head="No artificial flavours, preservatives & colors" />
        <Row>
          {cards.map((c) => {
            return <Card key={c.id} data={c} />;
          })}
        </Row>
      </CustomContainer>
    </section>
  );
};

export default SpecsSection;
