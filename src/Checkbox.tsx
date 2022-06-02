import { FC, useCallback, useRef, useState } from "react";
import { FormProvider, useForm, UseFormRegister, FieldValues } from "react-hook-form";
import styled from "styled-components";

const Style = styled.div`
    --checkbox-size: 1.5rem;
    /* overflow: hidden; */
    /* position: relative; */
    /* display: inline-block; */

    > input {
        position: absolute;
        left: -100px;
        top: -100px;
    }
    > label {
        position: relative;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
        cursor: pointer;
    }
    > label:before {
        content: "";
        display: inline-block;
        width: var(--checkbox-size);
        height: var(--checkbox-size);
        border: 2px solid black;
    }
    > input:focus + label:before {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 10px 36px 0px, rgba(0, 0, 0, 0.06) 0px 0px 0px 1px;
    }
    > input:checked + label {
        &:before {
            border-color: blue;
        }
        &:after {
            position: absolute;
            left: 0;
            bottom: 0;
            content: "";
            width: var(--checkbox-size);
            height: var(--checkbox-size);
            background-color: blue;
            // x-y             1x  1y   2x  2y   3x  3y   4x 4y    5x  5y   6x  6y
            clip-path: polygon(78% 16%, 93% 24%, 52% 86%, 14% 58%, 24% 46%, 46% 63%);
        }
    }
`;

interface CheckboxProps {
    register: any;
    label: string;
    name: string;
}

export const Checkbox: FC<CheckboxProps> = ({ register, label, name }) => {
    const [checked, setChecked] = useState(false);

    const checkboxChange = useCallback(() => {
        console.log("cambiando valor del check 1");
    }, [checked]);

    const onClickLabel = useCallback(() => {
        setChecked(!checked);
        console.log("clicando en el label y checkeando valor checked 1:", checked);
        const x: any = document.getElementById("custom1");
        x.checked = !checked;
        console.log("constante x:", x.checked);
    }, [checked]);

    return (
        <Style>
            <input type="checkbox" id="custom1" name={name} onChange={checkboxChange} {...register} />
            <label htmlFor={name} onClick={onClickLabel}>
                {label}
            </label>
        </Style>
    );
};
