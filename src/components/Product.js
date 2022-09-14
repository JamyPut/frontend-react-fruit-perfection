// Product component
import React from "react";
import citroen from "../assets/citroenen.jpeg";

function Product(props){
    return(
        <article className={"product"}>
            <img
                src={props.image}
                alt={props.image}
            />
            <h2 className={"product-name"}>{props.title}</h2>
            <p className={"product-description"}>
                {props.description}
            </p>
        </article>
    );
}

export default Product;