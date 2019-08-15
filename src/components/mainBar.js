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
    DropdownItem, Button } from 'reactstrap';
import useLogin from '../custom_hooks.js/login_hook';
import { useSelector } from 'react-redux'
 
import {Redirect} from 'react-router-dom'


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
    + month + '-' + year + ' -------   ';
}

const MainBar = (props)=>{

  const {
    logged, logout
 } = useLogin();

 const member = useSelector(state => state.products.member);
 

 if(!logged){
   return <Redirect to='/' />
 }else{
  return (
    <div>
    <Navbar expand="md">
      <NavbarBrand href="/">CashDrawer - {time()}    App developed by Umberto Gonnella --------</NavbarBrand>
      <NavbarToggler  />
      <Collapse navbar>
        <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="#">{member ? 'Member' : 'Not a member'}</NavLink>
          </NavItem>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret>
              Options
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>
                <Button size='sm' onClick={logout}>{logged? 'Sign Off' : 'Login'}</Button> 
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
   
}

export default MainBar;