import React from "react";
import { useEffect } from "react";

const Card = ({api}) => {
    useEffect(() => {
        fetchCard();
    },[]);

    const fetchCard = async () => {
        try {
            let json = await api();
            console.log(json);
        } catch(error) {
            console.log(error);
        }
    }

    return (
        <p>test</p>
    );
}

export default Card;