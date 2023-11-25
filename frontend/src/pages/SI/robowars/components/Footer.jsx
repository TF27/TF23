import styles from "./Footer.module.css";
import { Container, Row, Col } from 'react-bootstrap';

export const Footer = () => {
  return (
    
    <div class='d-flex'>
      <Container className="mt-5">
      <Row>
        <Col md={6} className="mb-3">
        <div className={styles.container}>
      <p className={styles.name}>Manas Dadhich</p>
      <p>+91 9981378767</p>
      <p>manas@techfest.org</p>
    </div>
        </Col>
        <Col md={6}>
        <div className={styles.container}>
    <p className={styles.name}>Arnav Patel</p>
    <p>+91 9372634701</p>
    <p>arnav@techfest.org</p>
  </div>
        </Col>
      </Row>
    </Container>
      
    
    
    </div>
  );
};
