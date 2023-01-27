import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

import classes from './NavigationBar.module.css';

function NavigationBar() {
  return (
    <Navbar className={classes.navbar} expand="md">
      <Navbar.Brand className={classes.navLogo}>LOGO</Navbar.Brand>
      <Nav.Link className={classes.ctaBtnHidden}>SIGN IN FOR FREE</Nav.Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className={classes.navbarCollapse} id="basic-navbar-nav">
        <Nav className={classes.navbarNav}>
          <div className={classes.leftNavbarLinks}>
            <Nav.Link className={classes.navbarLink}>How it works</Nav.Link>
            <Nav.Link className={classes.navbarLink}>About</Nav.Link>
            <Nav.Link className={classes.navbarLink}>Instructions</Nav.Link>
            <Nav.Link className={classes.navbarLink}>Accounts</Nav.Link>
            <Nav.Link className={classes.navbarLink}>Platforms</Nav.Link>
            <Nav.Link className={classes.navbarLink}>Contact</Nav.Link>
          </div>
        </Nav>
        <div className={classes.rightNavbarLinks}>
          <NavDropdown
            className={classes.languageBtn}
            title="EN"
            id="basic-nav-dropdown"
          >
            <NavDropdown.Item>EN</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item>RO</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link className={classes.ctaBtn}>SIGN IN FOR FREE</Nav.Link>
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
