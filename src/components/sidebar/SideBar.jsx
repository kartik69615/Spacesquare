import "./sidebar.css"

export default function SideBar() {
    return (
        <div className='sidebar'>
            <div className="sidebarItem">
                <span className="sidebarTitle">ABOUT ME</span>
                <img className = "sidebarImg" src="https://source.unsplash.com/random" alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis dolor id magni sunt animi maiores repellat at? Recusandae doloremque natus neque deleniti praesentium quasi culpa amet. Recusandae consectetur explicabo dolores laboriosam optio nesciunt nisi.</p>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">CATEGORIES</span>
                <ul className="sidebarList">
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Life</li>
                    <li className="sidebarListItem">Life</li>
                </ul>
            </div>
            <div className="sidebarItem">
                <span className="sidebarTitle">FOLLOW US</span>
                <ul className="sidebarSocial">
                    <i className="sidebarIcon fa-brands fa-facebook-square"></i>
                    <i className="sidebarIcon fa-brands fa-twitter-square"></i>
                    <i className="sidebarIcon fa-brands fa-pinterest-square"></i>
                    <i className="sidebarIcon fa-brands fa-instagram-square"></i>
                </ul>
            </div>
        </div>
    )
}
