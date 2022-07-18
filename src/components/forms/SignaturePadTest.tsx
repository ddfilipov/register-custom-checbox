import { createRef, FC, useCallback, useEffect, useRef, useState } from "react";
import { FormProvider, useForm, UseFormRegister, FieldValues, useFieldArray } from "react-hook-form";
import SignaturePad from "react-signature-pad-wrapper";
import styled from "styled-components";
import { Checkbox } from "../Checkbox";
import { Checkbox2 } from "../Checkbox2";
import { CheckboxFinal } from "../CheckboxFinal";
import { GrupoInputs, TextInputs } from "../GrupoInputs";
import { Solicitante, Test } from "../Test";

interface FormFinal {
    firma: string; //TODO: max length = 2
}

export const SignaturePadTest: FC = ({}) => {
    const methods = useForm<FormFinal>({});
    const { register, handleSubmit, control, watch } = methods;
    let signatureRef = createRef<SignaturePad>();

    const firmaWatch = watch("firma");

    const onSubmit = useCallback(
        (data: FormFinal) => {
            const signaturePad = signatureRef.current;
            if (!signaturePad) {
                return;
            }
            register("firma", { value: signaturePad.toDataURL() });
            console.log(JSON.stringify(data, null, " "));
        },
        [firmaWatch, signatureRef]
    );

    const SignatureWrapper = styled.div`
        border: 1px solid #999999;
        width: 25%;
        height: 25%;
    `;

    const prueba = () => {
        console.log("asdasd");
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <SignatureWrapper>
                    <SignaturePad
                        ref={signatureRef} //*endStroke={prueba}//}
                    />
                </SignatureWrapper>
                <input type={"submit"} />
            </form>
        </FormProvider>
    );
};
