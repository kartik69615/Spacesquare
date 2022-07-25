import "./post.css"

export default function Post() {
    return (
        <div className="post">
            <img
                className="postImg"
                src="https://source.unsplash.com/random"
                alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        {/* <Link className="link" to="/posts?cat=Music">
                            Music
                        </Link> */}
                    </span>
                    <span className="postCat">
                        {/* <Link className="link" to="/posts?cat=Music">
                            Life
                        </Link> */}
                    </span>
                </div>
                <span className="postTitle">
                    {/* <Link to="/post/abc" className="link">
                        Lorem ipsum dolor sit amet
                    </Link> */}
                </span>
                <hr />
                <span className="postDate">25 mins ago</span>
            </div>
            <p className="postDesc">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
                officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
                fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
                atque, exercitationem quibusdam, reiciendis odio laboriosam?
            </p>
        </div>
    )
}