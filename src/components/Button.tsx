import "./Button.scss";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
    startAdornment?: React.ReactNode;
    endAdornment?: React.ReactNode;
    size?: "small" | "medium" | "large";
}

export const Button = ({
    children,
    startAdornment,
    endAdornment,
    size = "medium",
    className = "",
    ...props
}: ButtonProps) => {
    const combinedClassName = `button button--${size} ${className}`;
    return (
        <button className={combinedClassName} {...props}>
            {startAdornment}
            {children}
            {endAdornment}
        </button>
    );
};
