import { FC, useCallback, useEffect, useRef, useState } from "react";
import { FormProvider, useForm, UseFormRegister, FieldValues, useFieldArray } from "react-hook-form";
import styled from "styled-components";
import { Checkbox } from "../Checkbox";
import { Checkbox2 } from "../Checkbox2";
import { CheckboxFinal } from "../CheckboxFinal";
import { GrupoInputs, TextInputs } from "../GrupoInputs";
import { Solicitante, Test } from "../Test";

interface FormFinal {
    solicitantes: Solicitante[]; //TODO: max length = 2
}

export const FormDynamicArray: FC = ({}) => {
    const methods = useForm<FormFinal>({
        defaultValues: {
            solicitantes: [{ datosMinimos: { dni: "" }, municipios: [{ nombre: "municipio default1" }] }],
        },
    });
    const { register, handleSubmit, watch, control } = methods;

    const {
        fields: fieldsSolicitantes,
        append: appendSolicitantes,
        remove: removeSolicitantes,
    } = useFieldArray({ name: "solicitantes", control });

    const onSubmit = useCallback((data: FormFinal) => {
        console.log(JSON.stringify(data, null, " "));
    }, []);

    const clickMas = useCallback(() => {
        if (fieldsSolicitantes.length < 2) {
            appendSolicitantes({ datosMinimos: { dni: "", nombre: "" } });
        }
    }, [fieldsSolicitantes]);

    const clickMenos = useCallback(() => {
        removeSolicitantes(fieldsSolicitantes.length - 1);
    }, []);

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div>
                    {fieldsSolicitantes.map((solicitante, index) => (
                        <Test soli={solicitante} registrar={register} id={index} key={index} control={control} />
                    ))}
                </div>
                <p>Añadir solicitante</p>
                <input type="button" value="          +          " onClick={clickMas} />
                <input type="button" value="          -          " onClick={clickMenos} />
                <input type={"submit"} />
            </form>
        </FormProvider>
    );
};
