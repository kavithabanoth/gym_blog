import "./singlePost.css"
export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img
             src="https://static01.nyt.com/images/2020/01/06/well/04run-gym/04run-gym-superJumbo.jpg" 
             alt="" 
             className="singlePostImg" 
             />
             <h1 className="singlePostTitle">
                Lorem ipsum dolor sit amet. 
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash-alt"></i>
                </div>
                </h1>
                <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author: <b>Kavitha</b> 
                        </span>
                    <span className="singlePostDate">1 hour ago </span>
                </div>
                <p className="singlPostDesc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit quibusdam nisi voluptatibus excepturi minus fuga dolorem placeat corrupti aut dolores? Aliquid dolor rem consequuntur ratione ad commodi dicta reiciendis modi?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni consequatur possimus, reiciendis rem alias vitae velit architecto debitis eius voluptate laborum. Nisi, dignissimos reprehenderit! Officiis odit commodi quos eos cupiditate?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Perspiciatis sit beatae dolores neque provident quas placeat exercitationem dolorem, quam reiciendis repellat dolorum pariatur ipsa natus nam quidem aut, fugiat minima?
                </p>
        </div>

    </div>
  )
}
