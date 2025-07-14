import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import {  useNavigate, useLocation  } from 'react-router-dom';
import { useEffect, useState } from 'react';

import ThemeToggle from './ThemeToggle';

import './Navbar.css';

const AppNavbar: React.FC = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  const navigate = useNavigate();
    const location = useLocation();

  useEffect(() => {
    const auth = localStorage.getItem('isAuthenticated');
    setIsAuth(auth === 'true');
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    setIsAuth(false);
    navigate('/login');
  };

 
  return (
      <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="/">Mi App</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ms-auto align-items-center">
          {!isAuth ? (
            <>
              <Nav.Link href="/login">Login</Nav.Link>
              <Nav.Link href="/register">Registro</Nav.Link>
            </>
          ) : (
            <>
              <Nav.Link href="/">Inicio</Nav.Link>
              <Button variant="outline-light" onClick={handleLogout}>
                Cerrar sesión
              </Button>
            </>
          )}
          <ThemeToggle /> {/* 👈 botón modo oscuro/claro */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );

};

export default AppNavbar;
