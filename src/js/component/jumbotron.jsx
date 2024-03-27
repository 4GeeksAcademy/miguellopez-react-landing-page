import React from "react";
import ReactDOM from "react-dom";

const Jumbotron = ({props}) => {
    return (
        <div>
            <div className="jumbotron">
                <h1 className="display-4 custom-font pt-4" id="animated-text">{props.tituloJumbotron}</h1>
                <p className="lead"><strong>{props.lema1}</strong></p>
                <hr className="my-4" />
                <p className="card-text" dangerouslySetInnerHTML={{__html: props.lema2}}></p>
                <a className="btn btn-primary btn-lg mb-4" href="#" role="button">{props.botonJumbotron}</a>
            </div>
        </div>
    );
};

export default Jumbotron;