import { FC, useCallback, useRef, useState } from "react";
import { FieldValues, FormProvider, useForm, UseFormRegister, UseFormReturn } from "react-hook-form";
import styled from "styled-components";
import { FormProps } from "./forms/Formulario1";

export const Container = styled.div`
    border: 1px solid black;
    display: inline-block;
    padding: 10px;
    margin: 10px;
    width: 200px;
`;

export interface InputX {
    texto: string;
    desde: string;
    hasta: string;
}

export const GrupoInputs: FC<InputX> = ({ texto, desde, hasta }) => {
    return (
        <Container>
            <div>
                <label htmlFor="texto1">Texto: </label>
                <input type="text" value={texto} />
            </div>
            <div>
                <label htmlFor="texto1">Desde: </label>
                <input type="text" value={desde} />
            </div>
            <div>
                <label htmlFor="texto1">Hasta: </label>
                <input type="text" value={hasta} />
            </div>
        </Container>
    );
};
