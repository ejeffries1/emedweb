import { Nav, NavItem, NavLink, Navbar, NavbarBrand } from "reactstrap";
import UserLoginForm from "../features/user/UserLoginForm";


const Header = () => {
    return (
        <Navbar dark color="dark" expand='md' tabs>
            <NavbarBrand href="/" className="ms-5 primary">
                <h1>Emed</h1>
            </NavbarBrand>
        <Nav className="ms-auto">
            <NavItem>
                <NavLink href="/prescriptions">Prescription</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/account">Account</NavLink>
            </NavItem>
            <NavItem>
                <NavLink href="/aboutus">About Us</NavLink>
            </NavItem> 
            <NavItem> 
                </NavItem>        
            </Nav>
            <UserLoginForm />
        </Navbar>
    )
};

export default Header;