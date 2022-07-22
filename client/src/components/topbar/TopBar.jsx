import "./topbar.css"
import { Link } from "react-router-dom";

export default function TopBar() {
  const user = false;
  return (
    <div className="top">
       <div className=" topIcon topLeft">
        <i className=" topIcon fab fa-facebook-square"></i>
        <i className=" topIcon fab fa-twitter-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
       </div>
       <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/">Home</Link>
            </li>
            <li className="topListItem"><Link className="link" to="/">ABOUT</Link></li>
            <li className="topListItem"><Link className="link" to="/">CONTACT</Link></li>
            <li className="topListItem"><Link className="link" to="/write">WRITE</Link></li>
            <li className="topListItem">
              {user && "LOGOUT"}
            </li>
        </ul>
      </div>
      <div className="topRight">
          {
            user ? (

          
        
              <img 
                className="topImg"
                src="https://lmimirror3pvr.azureedge.net/static/media/18461/cafd906b-879e-43ff-8a4b-0e593f42a8bd/training-load-960x540.jpg" 
                alt="" 
              />
            ) : (
              <ul className="topList">
                <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
                </Link>
                </li>
      
                <li className="topListItem">
               <Link className="link" to="/register">
                REGISTER
                </Link>
                </li>
              </ul>
            
            )}
          
           <i className="topSearchIcon fas fa-search"></i>
        </div>
    </div>
  );
}
