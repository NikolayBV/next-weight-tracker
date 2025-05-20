import "./button.css";

interface ButtonProps {
    buttonTitle: string;
    onClick?: () => void;
    type?: "submit" | "reset" | "button";
}

export default function Button({buttonTitle, onClick, type}: ButtonProps) {
    return (
        <button type={type} className="my-button" onClick={onClick}>{buttonTitle}</button>
    );
}