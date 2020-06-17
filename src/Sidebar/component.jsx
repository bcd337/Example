import React from 'react'
import './style.css'
import { NavLink } from 'react-router-dom';
import {
    Sidenav,
    Nav,
    Dropdown,
    Navbar,
    Sidebar,
    Icon
} from 'rsuite'

const headerStyles = {
    padding: 18,
    fontSize: 16,
};

const MyLink = React.forwardRef((props, ref) => {
    const { href, as, ...rest } = props;
    return (
      <NavLink href={href} as={as} className="test" ref={ref}  {...rest} />
    );
  });
  
const Link = props => <Nav.Item componentClass={MyLink} {...props} />;

const SubLink = props => <Dropdown.Item componentClass={MyLink} {...props} />;

function App({open, toogle_open, logout}) {
    return (
        <Sidebar
            className="d-flex flex-column h-100vh"
            width={open
            ? 260
            : 56}
            collapsible>
            <Sidenav.Header>
                <div
                    style={headerStyles}
                    className="h-56px text-dark bg-warning text-nowrap overflow-hidden font-weight-bold">
                    <Icon icon="logo-analytics" size="lg"/>
                    <span className="ml-3">SEMBAKOO</span>
                </div>
            </Sidenav.Header>
            <Sidenav
                expanded={open}
                defaultOpenKeys={['3']}
                appearance="subtle"
                className="flex-grow-1"
            >
                <Sidenav.Body>
                    <Nav>
                        <Link icon={< Icon icon = "dashboard" />} to={"/"} exact>
                            Dashboard
                        </Link>
                        <Link icon={< Icon icon = "group" />} to={"/keluhan"}>
                            Keluhan User
                        </Link>
                        <Dropdown
                            eventKey="1"
                            trigger="hover"
                            title="Input Data"
                            icon={< Icon icon = "magic" />}
                            placement="rightStart">
                            <SubLink to={"/data"}>
                                Data
                            </SubLink>
                            <SubLink to={"/provinsi"}>
                                Provinsi
                            </SubLink>
                            <SubLink to={"/kabupaten"}>
                                Kabupaten
                            </SubLink>
                            <SubLink to={"/kota"}>
                                Kota
                            </SubLink>
                            <SubLink to={"/komoditi"}>
                                Komoditi
                            </SubLink>
                        </Dropdown>
                        <Dropdown
                            eventKey="2"
                            trigger="hover"
                            title="Data Control"
                            icon={< Icon icon = "gear-circle" />}
                            placement="rightStart">
                            <Dropdown.Item>User</Dropdown.Item>
                        </Dropdown>
                    </Nav>
                </Sidenav.Body>
            </Sidenav>

            <Navbar appearance="subtle" className="nav-toggle">
                <Navbar.Body>
                    <Nav>
                        <Dropdown
                            placement="topStart"
                            trigger="click"
                            renderTitle={children => {
                            return <Icon icon="cog" className="h-56px w-56px text-center lh-56px"/>;
                        }}>
                            <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
                        </Dropdown>
                    </Nav>

                    <Nav pullRight>
                        <Nav.Item onClick={toogle_open} className="text-center w-56px">
                            <Icon
                                className="m-0"
                                icon={open
                                ? 'angle-left'
                                : 'angle-right'}/>
                        </Nav.Item>
                    </Nav>
                </Navbar.Body>
            </Navbar>

        </Sidebar>
    );
}

export default App;
