const { Container } = require("react-bootstrap");
import styles from './custom_container.module.scss'

const CustomContainer = ({ children, ...props }) => {
  return <Container className={styles.cont} {...props}>{children}</Container>;
};

export default CustomContainer;
