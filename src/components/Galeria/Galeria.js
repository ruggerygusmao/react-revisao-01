import React from "react";
import "./Galeria.css";

export default function Galeria(props){
    
    return(
        <>
            <section className="item">
                <div className="imagem">
                     <img src={props.imagem} alt="img1"/>
                </div>
                <div className="descricao">
                     <h3>{props.titulo}</h3>
                     <p>{props.descricao}</p>
                     <a href="#" target="_blank">VER</a>
                </div>
            </section>
            
        </>
    );
}