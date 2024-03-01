import "./write.css";


export default function Write(){
  return(
    <div className="write">
      <img src="https://images.pexels.com/photos/20414663/pexels-photo-20414663/free-photo-of-a-person-s-hand-is-reaching-out-to-the-sand.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                className="coverImg"
              alt="" />
            <form className="writeForm">

              <div className="writeFormGroup">
                <label htmlFor="fileInput">
                   <i className="writeIcon fa-solid fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:"none"}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true} />
              </div>

    <div className="writeFormGroup">
      <textarea type="text" placeholder="Tell Your story" className="writeInput writeText"></textarea>
    </div>

       <button className="writeSubmit">Publish</button>

      </form>
    </div>
  )
}
