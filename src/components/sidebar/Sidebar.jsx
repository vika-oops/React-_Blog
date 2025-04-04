import "./sidebar.css"

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img src="./images/farm7.jpg" alt=""/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
           Iure adipisci commodi ex! Deleniti illum nobis asperiores sed alias.</p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          <li className="sidebarListItem">Life</li>
          <li className="sidebarListItem">Music</li>
          <li className="sidebarListItem">Style</li>
          <li className="sidebarListItem">Sport</li>
          <li className="sidebarListItem">Tech</li>
          <li className="sidebarListItem">Cinema</li>
        </ul>
      </div>
      <div className="sidebarItem">
      <span className="sidebarTitle">FOLLOW US</span>
      <div className="sidebarSocial">
        <i className="sidebarIcon fa fa-whatsapp"></i>
         <i className="sidebarIcon fa fa-twitter" ></i>
         <i className="sidebarIcon fa fa-instagram"></i>
         <i className="sidebarIcon fa fa-linkedin-square" ></i>
      </div>
      </div>
        </div>
  )
}
