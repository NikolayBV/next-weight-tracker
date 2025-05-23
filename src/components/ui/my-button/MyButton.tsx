import "./button.css";
import { Button } from '@mantine/core';

interface ButtonProps {
    buttonTitle: string;
    onClick?: () => void;
    size?: string;
}

export default function MyButton({buttonTitle, onClick, size}: ButtonProps) {
    return (
        <Button size={size} onClick={onClick} variant="default">
            {buttonTitle}
        </Button>
    );
}