import "./post.css"


export default function Post(){
  return(
    <div className="post">
     <img className="postImg" src="https://images.pexels.com/photos/19477996/pexels-photo-19477996/free-photo-of-close-up-of-a-white-cat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />

      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">
          lorem iosu dolor site amet
        </span>
           <hr/>
       <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore autem, natus, quidem fugiat velit ipsum nisi rem, iure consequatur quis delectus eaque! Esse laborum repellat numquam accusamus provident ex.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore autem, natus, quidem fugiat velit ipsum nisi rem, iure consequatur quis delectus eaque! Esse laborum repellat numquam accusamus provident ex.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore autem, natus, quidem fugiat velit ipsum nisi rem, iure consequatur quis delectus eaque! Esse laborum repellat numquam accusamus provident ex.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur dolore autem, natus, quidem fugiat velit ipsum nisi rem, iure consequatur quis delectus eaque! Esse laborum repellat numquam accusamus provident ex.
      
      </p>


    </div>

  )
}


