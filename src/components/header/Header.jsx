import "./header.css"

export default function Header() {
    return (
        <div className="header">
            <div className="headerTitle">
                <span className="headerTitleSm">ReactJs and Node</span>
                <span className="headerTitleLg">Blog</span>
            </div>
            <img className="headerImg" src="https://source.unsplash.com/random" alt="" />
        </div>
    )
}
