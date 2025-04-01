import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img src="./images/farm4.jpg" alt="" className="singlePostImg" />
            <h1 className="singlePostTitle">Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                <div className="singlePostEdit">
                    <i className="singlePostIcon far fa-edit"></i>
                    <i className="singlePostIcon far fa-trash"></i>
                </div>
                 </h1>
                 <div className="singlePostInfo">
                    <span className="singlePostAuthor">
                        Author:<b>Zerifa</b>
                    </span>
                    <span className="singlePostDate">1 hour ago</span>
                 </div>
                 <p className="singlePostDesc">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Impedit similique quaerat magnam perferendis at, esse rerum, 
                    eaque sint tempore temporibus voluptatem blanditiis cupiditate quidem maiores?
                     Enim quis rem porro laborum!
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Impedit similique quaerat magnam perferendis at, esse rerum, 
                    eaque sint tempore temporibus voluptatem blanditiis cupiditate quidem maiores?
                     Enim quis rem porro laborum!
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Impedit similique quaerat magnam perferendis at, esse rerum, 
                    eaque sint tempore temporibus voluptatem blanditiis cupiditate quidem maiores?
                     Enim quis rem porro laborum!
                     Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Impedit similique quaerat magnam perferendis at, esse rerum, 
                    eaque sint tempore temporibus voluptatem blanditiis cupiditate quidem maiores?
                     Enim quis rem porro laborum!
                 </p>
        </div>
        </div>
  )
}
