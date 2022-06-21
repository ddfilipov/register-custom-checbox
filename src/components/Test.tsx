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

interface IDatosMinimosPersona {
    dni: string;
    nombre: string;
}

export interface Solicitante {
    datosMinimos: IDatosMinimosPersona;
}

export interface SolicitanteDenis {
    soli: Solicitante;
    registrar: any;
    id: number;
}

export const Test: FC<SolicitanteDenis> = ({ soli, registrar, id }) => {
    return (
        <div>
            <div>
                <label htmlFor="dni">Valor del DNI default: {soli.datosMinimos.dni}</label>
                <input type="text" maxLength={50} {...registrar(`solicitantes.${id}.datosMinimos.dni` as const)} />
            </div>
            <div>
                <label htmlFor="nombre">Valor del NOMBRE default: {soli.datosMinimos.nombre}</label>
                <input type="text" maxLength={50} {...registrar(`solicitantes.${id}.datosMinimos.nombre` as const)} />
            </div>
        </div>
    );
};
