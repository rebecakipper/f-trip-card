import "./Text.scss";

interface TextProps extends React.HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode;
}

export const Text = ({ children }: TextProps) => {
    return <span className="text">{children}</span>;
};
