import React from "react"
import { Link } from "react-router-dom";

function Nav() {
    return <div>
        <nav>
            <Link to="/" ><ul>דף הבית</ul> </Link>
            <ul>אודות</ul>
            <ul>קטגוריות</ul>
            <ul>צור קשר</ul>
            <ul>בלוג</ul>
        </nav>
    </div>
}
export default Nav;