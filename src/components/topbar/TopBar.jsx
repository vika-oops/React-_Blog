import "./topbar.css";

export default function TopBar(){
    return(
        <div className="top">
         <div className="topLeft">
         <i className="topIcon fa fa-whatsapp"></i>
         <i className="topIcon fa fa-twitter" ></i>
         <i className="topIcon fa fa-instagram"></i>
         <i className="topIcon fa fa-linkedin-square" ></i>
         </div>
         <div className="topCenter">
        <ul className="topList">
            <li className="topListItem">HOME</li>
            <li className="topListItem">ABOUT</li>
            <li className="topListItem">CONTACT</li>
            <li className="topListItem">WRITE</li>
            <li className="topListItem">LOGOUT</li>
        </ul>
        </div>
         <div className="topRight">
            <img className="topImg"></img>
            <img src="../image/farm8" alt=""/>
            <i className="topSearchIcon fa fa-search"></i>
         </div>
        </div>
    )
}