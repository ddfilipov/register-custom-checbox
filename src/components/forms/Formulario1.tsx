import { FC, useCallback, useEffect, useRef, useState } from "react";
import { FormProvider, useForm, UseFormRegister, FieldValues, useFieldArray } from "react-hook-form";
import styled from "styled-components";
import { Checkbox } from "../Checkbox";
import { Checkbox2 } from "../Checkbox2";
import { CheckboxFinal } from "../CheckboxFinal";
import { GrupoInputs, TextInputs } from "../GrupoInputs";

export interface FormProps {
    check1: boolean;
    check2: boolean;
    check3: boolean;
    inputs: TextInputs[];
}

export const Formulario1: FC = ({}) => {
    const methods = useForm<FormProps>({
        defaultValues: {
            check1: false,
            check2: false,
            check3: false,
            inputs: [{ texto: "", desde: "", hasta: "" }],
        },
    });
    const { register, handleSubmit, watch, control } = methods;

    const { fields, append, remove } = useFieldArray({ name: "inputs", control });
    const onSubmit = useCallback((data: FormProps) => {
        console.log(JSON.stringify(data, null, " "));
    }, []);

    const clickMas = useCallback(() => {
        append({ texto: "", desde: "", hasta: "" });
    }, []);

    const clickMenos = useCallback(() => {
        remove(fields.length - 1);
    }, []);

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CheckboxFinal label="Checkbox Custom 1" register={{ ...register("check1") }} name={"check1"} />
                <CheckboxFinal label="Checkbox Custom 2" register={{ ...register("check2") }} name={"check2"} />
                <CheckboxFinal label="Checkbox Custom 3" register={{ ...register("check3") }} name={"check3"} />
                <input type="submit" style={{ display: "block" }} />
                <hr />
                <div>
                    {fields.map((input, index) => (
                        <GrupoInputs
                            texto={input.texto}
                            desde={input.desde}
                            hasta={input.hasta}
                            registerTexto={{ ...register(`inputs.${index}.texto` as const) }}
                            registerDesde={{ ...register(`inputs.${index}.desde` as const) }}
                            registerHasta={{ ...register(`inputs.${index}.hasta` as const) }}
                            key={index}
                        ></GrupoInputs>
                    ))}
                    <input type="button" value="          +          " onClick={clickMas} />
                    <input type="button" value="          -          " onClick={clickMenos} />
                </div>
                <hr />
                <div></div>
            </form>
        </FormProvider>
    );
};
