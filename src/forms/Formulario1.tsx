import { FC, useCallback, useRef, useState } from "react";
import { FormProvider, useForm, UseFormRegister, FieldValues } from "react-hook-form";
import styled from "styled-components";
import { Checkbox } from "../Checkbox";
import { Checkbox2 } from "../Checkbox2";
import { CheckboxFinal } from "../CheckboxFinal";
import * as Mat from "@material-ui/core";

interface FormProps {
    check1: boolean;
    check2: boolean;
    check3: boolean;
}
export const Formulario1: FC = ({}) => {
    const methods = useForm<FormProps>();
    const { register, handleSubmit, watch } = methods;

    const onSubmit = useCallback((data: FormProps) => {
        alert(JSON.stringify(data, null, " "));
    }, []);

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <CheckboxFinal
                    label="Checkbox Custom 1"
                    register={{ ...register("check1") }}
                    name={"check1"}
                    // id={"check1"}
                />
                <CheckboxFinal
                    label="Checkbox Custom 2"
                    register={{ ...register("check2") }}
                    name={"check2"}
                    // id={"check2"}
                />
                <CheckboxFinal
                    label="Checkbox Custom 3"
                    register={{ ...register("check3") }}
                    name={"check3"}
                    // id={"check3"}
                />
                <input type="submit" style={{ display: "block" }} />
            </form>
        </FormProvider>
    );
};
