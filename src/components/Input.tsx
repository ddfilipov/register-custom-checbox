import { FC } from "react";

interface InputProps {
    label: string;
    name: string;
    register: any;
}

export const Input: FC<InputProps> = ({ label, register, name }) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input type="text" {...register} />
        </div>
    );
};
