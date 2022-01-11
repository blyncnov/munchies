import React, { useState } from 'react'

import { MdLocationPin } from "react-icons/md"
import { FaBars, FaTimes } from 'react-icons/fa'
import { GrAruba } from "react-icons/gr"


// import styles for Navbar 
import {
    NavbarContainer,
    NavbarColumn,
    List
} from "../styles/Navbar-styles"

const Navbar = () => {
    const [isClicked, setIsClicked] = useState(true)

    const changeClickHandler = () => {
        setIsClicked(!isClicked)
        console.log(isClicked);
    }

    return (
        <>
            <NavbarContainer className="border h-32 scroll-smooth">
                <NavbarColumn>
                    <div className="global__item">
                        <h1 style={{ fontSize: "2em" }} ><  GrAruba /></h1>
                    </div>

                    <div className="navbar__search global__item">
                        <div className="flex navbar__gap" >
                            <p><MdLocationPin /></p>
                            <form >
                                <input type="search" name="search" id="search" placeholder="Enter delivery address" />
                            </form>
                        </div>
                    </div>

                    <div className="navbar__widget global__item">
                        <List onClick={changeClickHandler} click={isClicked} >
                            <li onClick={changeClickHandler} ><a href="/">Home</a></li>
                            <li onClick={changeClickHandler} ><a href="/menu">Our Menu</a></li>
                            <li onClick={changeClickHandler} ><a href="/locate">Locate</a></li>
                            <li onClick={changeClickHandler} ><a href="/download">Download App</a></li>
                        </List>

                        <div className="login__btn">
                            <button className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"> <a href="/order">Order Now</a></button>
                        </div>

                        <div onClick={changeClickHandler} className="mobile">
                            <h1>{isClicked ? <FaBars /> : <FaTimes />}</h1>
                        </div>
                    </div>
                </NavbarColumn>
            </NavbarContainer>

        </>
    )
}

export default Navbar
