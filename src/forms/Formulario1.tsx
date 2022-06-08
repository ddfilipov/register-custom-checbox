import { FC, useCallback, useEffect, useRef, useState } from "react";
import { FormProvider, useForm, UseFormRegister, FieldValues } from "react-hook-form";
import styled from "styled-components";
import { Checkbox } from "../Checkbox";
import { Checkbox2 } from "../Checkbox2";
import { CheckboxFinal } from "../CheckboxFinal";
import { GrupoInputs } from "../GrupoInputs";

export interface FormProps {
    check1: boolean;
    check2: boolean;
    check3: boolean;
}

interface TextInputs {
    texto: string;
    desde: string;
    hasta: string;
}

export const Formulario1: FC = ({}) => {
    const methods = useForm<FormProps>();
    const { register, handleSubmit, watch } = methods;

    const onSubmit = useCallback((data: FormProps) => {
        alert(JSON.stringify(data, null, " "));
    }, []);

    const [inputX, setInputX] = useState<TextInputs[]>([{ texto: "texto", desde: "desde", hasta: "hasta" }]);

    const clickMas = useCallback(() => {
        setInputX([...inputX, { texto: "texto", desde: "desde", hasta: "hasta" }]);
    }, [inputX]);

    const clickMenos = useCallback(() => {
        if (inputX.length > 0 || inputX !== undefined) {
            setInputX(inputX.slice(0, -1));
        }
    }, [inputX]);

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CheckboxFinal label="Checkbox Custom 1" register={{ ...register("check1") }} name={"check1"} />
                <CheckboxFinal label="Checkbox Custom 2" register={{ ...register("check2") }} name={"check2"} />
                <CheckboxFinal label="Checkbox Custom 3" register={{ ...register("check3") }} name={"check3"} />
                <input type="submit" style={{ display: "block" }} />
                <hr />
                {inputX.map((input, index) => (
                    <GrupoInputs
                        texto={input.texto + " " + index}
                        desde={input.desde + " " + index}
                        hasta={input.hasta + " " + index}
                    ></GrupoInputs>
                ))}
                <input type="button" value="          +          " onClick={clickMas} />
                <input type="button" value="          -          " onClick={clickMenos} />
            </form>
        </FormProvider>
    );
};
