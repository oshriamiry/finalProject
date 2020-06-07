import React from "react"
import '../App.css';
import { Link } from "react-router-dom";

function Categories() {
    return <div className="Categories">
      <Link to="/" ><ul className="grilGaz">גריל גז</ul> </Link>
      <Link to="/" ><ul>מעשנות</ul> </Link>
      <Link to="/" ><ul>טאבונים</ul> </Link>
      <Link to="/" ><ul>מטבחי חוץ</ul> </Link>
      <Link to="/" ><ul>אביזרים</ul> </Link>
    </div>
}
export default Categories;