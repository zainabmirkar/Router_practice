import React from 'react';
import { Link } from 'react-router-dom';
const Menu=()=> {
  return (
    <>
      <div className="Menustyle">
    
  
          <ul className="ulstyle">
              <li className="listyle"> <Link to="/">Home </Link></li>
              <li className="listyle"> <Link to="About">About</Link></li>
              <li className="listyle"> <Link to="Contact">Contact</Link></li>
              <li className="listyle"> <Link to="User">User</Link></li>
          </ul>
      </div>
    </>
  );
}

const Home = () =>{
    return(
        <div className="about">
     <h1 className="about_h1" >This is Home section</h1>
     </div>
    )
}

export default Menu;

