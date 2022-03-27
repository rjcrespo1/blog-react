import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";
import { baseurl } from "../../baseurl";

export default function Sidebar() {
  const [cats, setCats] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get(baseurl + "/categories");
      setCats(res.data);
    };
    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://as1.ftcdn.net/v2/jpg/02/12/88/82/1000_F_212888221_rZe9FeCt4sTmhGz35BeyehO6obT1bT9J.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate qui
          necessitatibus nostrum illum reprehenderit.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cats.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
            <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
            <i className="sidebarIcon fa-brands fa-linkedin"></i>
            <i className="sidebarIcon fa-brands fa-github-square"></i>
            <i className="sidebarIcon fa-brands fa-facebook-square"></i>
        </div>
      </div>
    </div>
  );
}


// 'https://as1.ftcdn.net/v2/jpg/02/12/88/82/1000_F_212888221_rZe9FeCt4sTmhGz35BeyehO6obT1bT9J.jpg'
                // <i className="sidebarIcon fa-brands fa-linkedin"></i>
                // <i className="sidebarIcon fa-brands fa-github-square"></i>
                // <i className="sidebarIcon fa-brands fa-facebook-square"></i>