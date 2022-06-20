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

export interface TextInputs {
    texto: string;
    desde: string;
    hasta: string;
    registerTexto?: any;
    registerDesde?: any;
    registerHasta?: any;
}

export const GrupoInputs: FC<TextInputs> = ({ texto, desde, hasta, registerTexto, registerDesde, registerHasta }) => {
    return (
        <Container>
            <div>
                <label htmlFor="texto1">Texto: </label>
                <input type="text" {...registerTexto} />
            </div>
            <div>
                <label htmlFor="desde">Desde: </label>
                <input type="text" {...registerDesde} />
            </div>
            <div>
                <label htmlFor="hasta">Hasta: </label>
                <input type="text" {...registerHasta} />
            </div>
        </Container>
    );
};
