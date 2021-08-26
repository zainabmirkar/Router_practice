import React from 'react';
import { useHistory, useLocation, useParams } from 'react-router-dom';

const User = () => {
   const {name} = useParams();
   const Location = useLocation();
   const history = useHistory();
    return (
        
      <>
      <div className="user">
       <h1 className="user_h1" >This is User {name} section</h1>
       <p>My current location is {Location.pathname}</p>

       {Location.pathname === `/User/zainab` ? (<button className="btn" onClick={() => alert("hey zainab")}>Click here</button>): null}
       {Location.pathname === `/User/zainab` ? (<button className="btn" onClick={()=> history.goBack()}>Go Back</button>): null}
       </div>
      </>
    );
  }
  
  export default User;
  