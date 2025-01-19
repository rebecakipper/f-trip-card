import "./CardFooter.scss";

interface CardFooterProps {
    children: React.ReactNode;
}

export const CardFooter = ({ children }: CardFooterProps) => {
    return <div className="trip-card__footer">{children}</div>;
};
