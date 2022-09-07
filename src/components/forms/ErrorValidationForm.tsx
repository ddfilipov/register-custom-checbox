import { FC, useCallback, useEffect, useRef, useState } from "react";
import { FormProvider, useForm, UseFormRegister, FieldValues, useFieldArray } from "react-hook-form";
import styled from "styled-components";
import { Checkbox } from "../Checkbox";
import { Checkbox2 } from "../Checkbox2";
import { CheckboxFinal } from "../CheckboxFinal";
import { GrupoInputs, TextInputs } from "../GrupoInputs";

export interface IPersonData {
    name: string;
    surname: string;
    age: number;
}
export interface IGeneralData {
    city: string;
}

export interface FormProps {
    personData: IPersonData;
    generalData: IGeneralData;
}

export const ErrorValidationForm: FC = ({}) => {
    const methods = useForm<FormProps>({});
    const { register, handleSubmit } = methods;

    const onSubmit = useCallback((data: FormProps) => {
        console.log(JSON.stringify(data, null, " "));
    }, []);

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="personData.name">Name:</label>
                <input {...register("personData.name")} />
                <label htmlFor="personData.name">Surname:</label>
                <input {...register("personData.surname")} />
                <label htmlFor="personData.name">Age:</label>
                <input {...register("personData.age")} />
                <label htmlFor="personData.name">City:</label>
                <input {...register("generalData.city")} />
                <input type="submit" style={{ display: "block" }} />
                <hr />
            </form>
        </FormProvider>
    );
};
