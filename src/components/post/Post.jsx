import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img 
        className="postImg"
        src="images/farm5.jpg" 
        alt=""
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
               </span>
               <hr/>
               <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Cupiditate aut vel animi earum praesentium doloribus amet quibusdam perferendis possimus omnis corporis,
              adipisci libero quos, minus enim tenetur hic nihil illum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Cupiditate aut vel animi earum praesentium doloribus amet quibusdam perferendis possimus omnis corporis,
              adipisci libero quos, minus enim tenetur hic nihil illum.
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Cupiditate aut vel animi earum praesentium doloribus amet quibusdam perferendis possimus omnis corporis,
              adipisci libero quos, minus enim tenetur hic nihil illum.
              </p>
        </div>
  )
}
