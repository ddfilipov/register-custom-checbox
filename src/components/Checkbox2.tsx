import { FC, useCallback, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import styled from "styled-components";

interface CheckboxProps {
    register: any;
    label: string;
    name: string;
}

export const Checkbox2: FC<CheckboxProps> = ({ register, label, name }) => {
    const [checked, setChecked] = useState(false);
    const checkboxChange = useCallback(() => {
        console.log("cambiando valor del check 2");
    }, [checked]);

    const onClickLabel = useCallback(() => {
        setChecked(!checked);
        console.log("clicando en el label y checkeando valor checked 2:", checked);
    }, [checked]);

    return (
        <div>
            <input type="checkbox" id="check" {...register} 
            onChange={checkboxChange} />
            <label htmlFor={name} onClick={onClickLabel}>
                {label}
            </label>
        </div>
    );
};
