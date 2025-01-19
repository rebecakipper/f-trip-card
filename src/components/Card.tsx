import React from "react";
import "./Card.scss";

interface CardProps {
    children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ children, ...props }) => {
    const className = "card";
    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
};
