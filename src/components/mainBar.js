import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

    //calculate date and time
const time = () => {
    const t = new Date();
    let hour = t.getHours();
    let minutes = t.getMinutes();
    let day = t.getDate();
    let month = t.getMonth() + 1;
    let year = t.getFullYear();

    if(minutes < 10){
        minutes = '0' + minutes;
    }

    return hour + ':' + minutes +  '    ' + day + '-' 
    + month + '-' + year;
}

const MainBar = ()=>{
    return (
        <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">CashDrawer - {time()}</NavbarBrand>
          <NavbarToggler  />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="#">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">GitHub</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Log In
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
}

export default MainBar;