import "./sidebar.css";


export default function Sidebar(){
  return(


   <div className="sidebar">

   <div className="sidebarItem">
    <span className="sidebarTitle">ABOUT ME</span>
    <img className="sidebarImg" src="https://images.pexels.com/photos/20332518/pexels-photo-20332518/free-photo-of-close-up-of-tabby-cat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
    <p>some random text here you want to see and use for yourself do you like it not lmao hehe is this bad or what </p>
   </div>

   <div className="sidebarItem">
    <span className="sidebarTitle">CATEGORIES </span>

    <ul className="sidebarList">
      <li className="sidebarListItem">life</li>
      <li className="sidebarListItem">Music</li>
      <li className="sidebarListItem">Style</li>
      <li className="sidebarListItem">Sport</li>
      <li className="sidebarListItem">Tech</li>
      <li className="sidebarListItem">Cinema</li>
    </ul>
   </div>
 <div className="sidebarItem">
   <span className="sidebarTitle"> FOLLOW US</span>


   <div className="sidebarSocial">

        <i className="sidebarIcon fa-brands fa-square-facebook"></i>
        <i className="sidebarIcon fa-brands fa-square-x-twitter"></i>
        <i className="sidebarIcon fa-brands fa-square-pinterest"></i>
        <i className="sidebarIcon fa-brands fa-square-instagram"></i>

   </div>

 </div>


   </div>

  )
}



