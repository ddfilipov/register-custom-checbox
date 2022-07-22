import { createRef, FC, useCallback, useEffect, useRef, useState } from "react";
import { FormProvider, useForm, UseFormRegister, FieldValues, useFieldArray, Controller } from "react-hook-form";
import ReactSignatureCanvas from "react-signature-canvas";
import SignaturePad from "react-signature-canvas";
import styled from "styled-components";

interface FormFinal {
    firma: string; //TODO: max length = 2
    nombre: string;
}
const SignatureWrapper = styled.div``;

export const SignatureCanvasTest: FC = ({}) => {
    const methods = useForm<FormFinal>({});
    const { register, handleSubmit, control, watch, setValue } = methods;
    // let sigCanvas = createRef<SignaturePad>();
    let sigCanvas = useRef<ReactSignatureCanvas>(null);
    const [prueba, setPrueba] = useState<string>();

    const firmaWatch = watch("firma");

    const onSubmit = useCallback(
        (data: FormFinal) => {
            console.log("entrando en onSubmit");
            // const signaturePad = sigCanvas.current;
            // if (sigCanvas.current || sigCanvas.current != null) {
            //     console.log("HOLA???", sigCanvas.current.toDataURL());
            //     setValue("firma", sigCanvas.current.toDataURL());
            // }
            // register("firma", { value: prueba });
            console.log("DATAA", data);
            console.log(JSON.stringify(data, null, " "));
        },
        [firmaWatch]
    );

    // const onSubmit = (data: FormFinal) => {
    //     console.log({ ...data });
    // };

    const saveFirma = () => {
        if (sigCanvas.current) {
            const dataURL = sigCanvas.current.toDataURL();
            return dataURL;
        }
    };

    const clearSignature = () => {
        if (sigCanvas.current) {
            const dataURL = sigCanvas.current.clear();
            register("firma", {setValueAs: ()=>{}})
            return dataURL;
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <SignatureWrapper>
                    <Controller
                        name="firma"
                        control={control}
                        render={({ field }) => (
                            <SignaturePad
                                ref={sigCanvas}
                                onEnd={() => field.onChange(saveFirma())}
                                penColor="green"
                                canvasProps={{
                                    width: 315,
                                    height: 200,
                                    style: { border: "1px solid green" },
                                }}
                            />
                        )}
                    />
                </SignatureWrapper>
                <input
                    onClick={() => {
                        clearSignature();
                    }}
                    type="button"
                ></input>
                <input type="text" {...register("nombre")}></input>
                <input type={"submit"} />
            </form>
        </FormProvider>
    );
};
