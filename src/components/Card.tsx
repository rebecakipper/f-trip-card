import { ReactNode } from "react";
import "./Card.scss";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}

export default function Card({ children, ...props }: CardProps) {
    const className = "card"; // TODO: maybe use clsx merge with props.className

    return (
        <div className={className} {...props}>
            {children}
        </div>
    );
}
