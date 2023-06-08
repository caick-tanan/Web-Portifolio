import { useState, useEffect } from "react";
import {Nav, Navbar, Container} from "react-bootstrap";
import logo from '../assets/img/logo.svg';
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';
import { HashLink } from 'react-router-hash-link';
import {
    BrowserRouter as Router
  } from "react-router-dom";

export const NavBar = () => {

    const [activeLink, setActiveLink] = useState('home');
    // quando o usuário rolar a página a cor do backgound vai mudar de "cósmico" para preto
    const [scrolled, setScrolled] = useState(false);

    // Função que determinará o que acontece na rolagem do scroll
    useEffect(() => {
        const onScroll = () => {
            // Scroll na posição y -> Vertical
            if (window.scrollY > 50){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        }
        // Ouvinte para quando fazer a rolagem da página
        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener("scroll", onScroll);
     }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    } 

    return (    
        <Router>
            <Navbar expand="md" className={scrolled ? "scrolled": ""}>
                <Container>
                <Navbar.Brand href="/">
                    <img src={logo} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                                                                                                                    {/* O palco vai ser atualizado quando o link for pressionado */}
                    <Nav.Link href="#home" className={activeLink === 'home' ?  'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                    <Nav.Link href="#skills" className={activeLink === 'skills' ?  'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                    <Nav.Link href="#project" className={activeLink === 'project' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projetos</Nav.Link>
                    <Nav.Link href="#contact" className={activeLink === 'contact' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('contato')}>Contato</Nav.Link>
                </Nav>
                <span className="navbar-text">
                    <div className="social-icon">
                        <a href="https://www.linkedin.com/in/caick-tanan-03086b180/" target="_blank">
                            <img src={navIcon1} alt="Linkedin Caick" />
                        </a>
                        <a href="https://www.facebook.com/caick_tanan/" target="_blank">
                            <img src={navIcon2} alt="Facebook Caick" />
                        </a>
                        <a href="https://www.instagram.com/caick_tanan/" target="_blank">
                            <img src={navIcon3} alt="Instagram Caick" />
                        </a>
                    </div>
                    <HashLink to='#contact'>
                        <button className="vvd"><span>vamos nos conectar</span></button>
                    </HashLink>
                </span>
                </Navbar.Collapse>
            </Container>
            </Navbar>
        </Router>
    )
}