import "./input.css";

interface InputProps {
    inputTitle: string;
    value: string;
    type?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Input({inputTitle, onChange, type, value}: InputProps) {
    return (
        <label className="label">
            {inputTitle}
            <input
                className="label__input"
                type={type ?? "text"}
                value={value}
                onChange={onChange}
            />
        </label>
    );
}