import React from "react"
import {Link} from "react-router-dom"
import Button from "../Button/Button"
import Logo from "../Logo/Logo"
import Search from "../Search/Search"
import style from "./Navbar.module.css"



function Navbar(){
    return (
      <nav className={style.navbar}>
        <Link to= "/">
            <Logo/>
        </Link>
        <Search
            placeholder ="Search a song of your choice"
        />
        <Button>Give Feedback</Button>
        
      </nav>  
    )
}

export default Navbar