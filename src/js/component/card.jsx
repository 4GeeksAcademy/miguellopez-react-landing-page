import React from "react";
import ReactDOM from "react-dom";


const Card = ({ props }) => {
    return (
        <>
            {props.map((props, index) => (
                        <div className="card my-5 border border-dark border-4" style={{ width: "18rem" }} key={index}>
                            <img src={props.imagenCard} className="mt-2 d-flex justify-content-center rounded-circle" alt="..." style={{ width: "260px", height: "180px", objectFit: "cover", justifyContent: "center" }}/>
                            <div className="card-body">
                                <h5 className="card-title"><strong>{props.tituloCard}</strong></h5>
                                <p className="card-text">{props.descripcionCard}</p>
                            </div>
                                <div className="card-footer">
                                    <a href="#" className="btn btn-primary">{props.botonCard}</a>
                                </div>
                        </div>

            ))}
        </>
    );
};

export default Card;
