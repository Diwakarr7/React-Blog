import "./singlepost.css"

export default function SinglePost(){
  return(
   <div className="singlepost">

     <div className="singlePostWrapper">
      <img src="https://images.pexels.com/photos/19324900/pexels-photo-19324900/free-photo-of-fluffy-pampas-grass.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="singlePostImg" />
     <h1 className="singlePostTitle">Lorem ipsum dolor sit amet
        <div className="singlePostEdit">
                <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                <i className="singlePostIcon fa-solid fa-trash"></i>

        </div>

     </h1>
      <div className="singlePostInfo">
        <span className="singlePostAuthor">Author: <b>Some guy</b></span>
        <span className="singlePostDate">1 Hour ago</span>
      </div>
           <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum nisi sunt, ipsum vitae maxime quis. Natus, quo distinctio cumque nobis cum veritatis nesciunt culpa, vero iusto beatae neque temporibus
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum nisi sunt, ipsum vitae maxime quis. Natus, quo distinctio cumque nobis cum veritatis nesciunt culpa, vero iusto beatae neque temporibus.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum nisi sunt, ipsum vitae maxime quis. Natus, quo distinctio cumque nobis cum veritatis nesciunt culpa, vero iusto beatae neque temporibus.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum nisi sunt, ipsum vitae maxime quis. Natus, quo distinctio cumque nobis cum veritatis nesciunt culpa, vero iusto beatae neque temporibus.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum nisi sunt, ipsum vitae maxime quis. Natus, quo distinctio cumque nobis cum veritatis nesciunt culpa, vero iusto beatae neque temporibus.
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias nostrum nisi sunt, ipsum vitae maxime quis. Natus, quo distinctio cumque nobis cum veritatis nesciunt culpa, vero iusto beatae neque temporibus.</p>
     </div>
   </div>

  )
}


