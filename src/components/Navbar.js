// eslint-disable-next-line
import PropTypes from 'prop-types'
import React from 'react';
import { Link } from "react-router-dom";

export default function Navbar(props) {
    return (
        <div>
            <nav className={`navbar navbar-${props.mode === "dark" ? "dark" : ""} bg-${props.mode === "dark" ? "dark" : ""} fixed-top navbar-expand-lg `} style={{ backgroundColor: "#e3f2fd" }}>
                <div className="container-fluid">
                    <i className="fa fa-newspaper" style={{ marginRight: "15px", fontSize: "30px" }}></i>
                    <Link className={`navbar-brand ${props.mode === "dark" ? "text-gradient" : ""}`} to="/" style={{ fontWeight: "700" }}>NewsTracker</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-1">
                                <Link className="nav-link active liFont" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link className="nav-link active liFont" to="/sports">Sports</Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link className="nav-link active liFont" to="/business">Business</Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link className="nav-link active liFont" to="/entertainment">Entertainment</Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link className="nav-link active liFont" to="/health">Health</Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link className="nav-link active liFont" to="/science">Science</Link>
                            </li>
                            <li className="nav-item mx-1">
                                <Link className="nav-link active liFont" to="technology">Technology</Link>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search news" aria-label="Search"/>
                            <button className="btn btn-outline-info mx-3" type="submit">Search</button>
                        </form>
                        <div className={`form-check form-switch text-${props.mode === "light"} ? "dark":"light"`}>
                            {/* <form className="d-flex" role="search">
                                <input className="form-control me-2" type="search" placeholder="Search news" aria-label="Search" onChange={(e) => setSearch(e.target.value)} />
                                <button className="btn btn-outline-success mx-3" type="submit">Search</button>
                            </form> */}
                            <input className="form-check-input" type="checkbox" role="switch" aria-checked="false" id="flexSwitchCheckDefault" onClick={props.toggleMode}></input>
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Dark Mode</label>

                        </div>
                    </div>
                </div>
            </nav>
        </div>
    )
}


