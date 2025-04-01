import "./settings.css"
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings() {
  return (
    <div className="settings">
        <div className="settingWrapper">
          <div className="settingsTitle">
            <span className="settingUpdateTitle">Update Your Account</span>
            <span className="settingDeleteTitle">Delete Account</span>
          </div>
          <form className="settingsForm">
            <label>Profile Picture</label>
            <div className="settingsPP">
              <img src="./images/main2.jpg" alt="" />
              <label htmlFor="fileInput">
                <i className="settingsPPIcon far fa-user-circle"></i>
              </label>
              <input type="file" id="fileInput" style={{display:"none"}} />
            </div>
            <label >Username</label>
            <input type="file" placeholder="Sherrif" />
            <label >Email</label>
            <input type="email" placeholder="Sherrif@gmail.com" />
            <label >Password</label>
            <input type="password"/>
            <button className="settingsSubmit">Update</button>
          </form>
        </div>
        <Sidebar/>
        </div>
  )
}
