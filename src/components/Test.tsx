import { FC, useCallback, useRef, useState } from "react";
import { FieldValues, FormProvider, useFieldArray, useForm, UseFormRegister, UseFormReturn } from "react-hook-form";
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

interface IEmpadronamiento {
    nombre: string;
}

export interface Solicitante {
    datosMinimos: IDatosMinimosPersona;
    municipios: IEmpadronamiento[];
}

export interface SolicitanteDenis {
    soli: Solicitante;
    registrar: any;
    id: number;
    control: any;
}

export const Test: FC<SolicitanteDenis> = ({ soli, registrar, id, control }) => {
    const {
        fields: fieldsEmpadronamiento,
        append: appendEmpadronamiento,
        remove: removeEmpadronamiento,
    } = useFieldArray({ name: `solicitantes.${id}.municipios`, control });

    const clickMas = useCallback(() => {
        appendEmpadronamiento({ nombre: "" });
    }, [fieldsEmpadronamiento]);

    const clickMenos = useCallback(() => {
        removeEmpadronamiento(fieldsEmpadronamiento.length - 1);
    }, [fieldsEmpadronamiento]);

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
            <div>
                {fieldsEmpadronamiento.map((municipio, index) => (
                    <div key={index}>
                        <label htmlFor="nombre">Empadronamiento {index + 1}</label>
                        <input
                            type="text"
                            maxLength={50}
                            {...registrar(`solicitantes.${id}.municipios.${index}.nombre` as const)}
                        />
                    </div>
                ))}
                <p>Añadir municipio</p>
                <input type="button" value="          +          " onClick={clickMas} />
                <input type="button" value="          -          " onClick={clickMenos} />
            </div>
        </div>
    );
};
