import React from "react";

const Nav = ({props}) => {
    return (
<nav className="navbar navbar-expand-lg bg-light border-bottom border-body text-white" data-bs-theme="light">
    <div className="container-fluid">
        <a className="navbar-brand hover-slide" href="#">{props.tituloNav}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="#">{props.link1}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">{props.link2}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">{props.link3}</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">{props.link4}</a>
                </li>
            </ul>
        </div>
    </div>
</nav>
    );
};

export default Nav;