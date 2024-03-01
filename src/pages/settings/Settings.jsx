import "./settings.css";
import Sidebar from "../../components/sidebar/Sidebar"

export default function Settings(){
  return(
    <div className="settings">
      <div className="settingsWrapper">
        <div className="settingsTitle">
          <span className="settingsUpdateTitle">update your account</span>
          <span className="settingsDeleteTitle">Delete account</span>
        </div>
        <form  className="settingsForm">
            <label htmlFor="">Profile picture</label>
            <div className="settingsPP">
              <img className="settingsPPImg" src="https://images.pexels.com/photos/220429/pexels-photo-220429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

            <label htmlFor="fileInput">
              <i className="settingsPPIcon fa-solid fa-user"></i>
            </label>
            <input type="file"  id ="fileInput" style={{display:"none"}}/>
            </div>
            <label >username</label>
            <input type="text" placeholder="enter"/>
            <label >email</label>
            <input type="email" placeholder="example@gmail.com"/>
            <label >password</label>
            <input type="password" placeholder="password"/>
            <button type="submit" >Update</button>
        </form>
      </div>

      <Sidebar />
    </div>
  )
}

