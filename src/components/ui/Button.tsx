'use client';
import "./button.css";

interface ButtonProps {
    buttonTitle: string;
    onClick: () => void;
}

export default function Button({buttonTitle, onClick}: ButtonProps) {
    return (
        <button className="my-button" onClick={onClick}>{buttonTitle}</button>
    );
}