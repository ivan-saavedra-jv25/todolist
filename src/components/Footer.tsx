import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {

  const version = import.meta.env.VITE_APP_VERSION;
  
  return (
    <footer className="bg-dark text-light py-3 mt-auto border-top">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center text-md-start mb-2 mb-md-0">
            <small>
              &copy; {new Date().getFullYear()} Mi App. Todos los derechos reservados.
            </small>
          </Col>
          <Col xs={12} md={6} className="text-center text-md-end">
            <small className="text-secondary">
              Versión: {version || '1.0.0'}
            </small>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;