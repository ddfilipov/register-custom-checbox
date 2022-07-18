import { createRef, FC, useCallback, useEffect, useRef, useState } from "react";
import { FormProvider, useForm, UseFormRegister, FieldValues, useFieldArray, Controller } from "react-hook-form";
import ReactSignatureCanvas from "react-signature-canvas";
import SignaturePad from "react-signature-canvas";
import styled from "styled-components";

interface FormFinal {
    firma: string; //TODO: max length = 2
}

export const SignatureCanvasTest: FC = ({}) => {
    const methods = useForm<FormFinal>({});
    const { register, handleSubmit, control, watch } = methods;
    // let sigCanvas = createRef<SignaturePad>();
    let sigCanvas = useRef<ReactSignatureCanvas | null>(null);
    const [prueba, setPrueba] = useState<string>();

    const firmaWatch = watch("firma");

    // const onSubmit = useCallback((data: FormFinal) => {
    //     console.log("entrando en onSubmit");
    //     const signaturePad = sigCanvas.current;
    //     if (sigCanvas.current || sigCanvas.current != null) {
    //         register("firma", { value: sigCanvas.current.toDataURL() });
    //     }
    //     // register("firma", { value: prueba });
    //     console.log(JSON.stringify(data, null, " "));
    // }, []);

    const onSubmit = (data: FormFinal) => {
        console.log("entrando en onSubmit");
        const signaturePad = sigCanvas.current;
        if (sigCanvas.current || sigCanvas.current != null) {
            console.log("HOLA???", sigCanvas.current.toDataURL());
            // register("firma", { value: sigCanvas.current.toDataURL() });
            register("firma", {
                setValueAs: () => {
                    if (sigCanvas.current || sigCanvas.current != null) {
                        return sigCanvas.current.toDataURL();
                    } else return "pepe";
                },
            });
            // setValueAs: (value: any) => any;
        }
        // register("firma", { value: prueba });
        console.log("DATAA", data);
        console.log(JSON.stringify(data, null, " "));
    };

    const SignatureWrapper = styled.div`
        border: 1px solid #999999;
        width: 25%;
        height: 25%;
    `;

    const formatIntoPng = () => {
        console.log("entro en formatIntoPng");
        if (sigCanvas.current) {
            console.log("entro IFFFFFFFFFFFFFFF");
            const dataURL = sigCanvas.current.toDataURL();
            // setPrueba(dataURL);
            console.log("dataURL:", dataURL);
            register("firma", { value: dataURL });
            return dataURL;
        }
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <SignatureWrapper>
                    {/* <SignaturePad ref={sigCanvas} /> */}
                    <Controller
                        name="firma"
                        control={control}
                        render={({ field, fieldState,  }) => (
                            <SignaturePad
                                ref={sigCanvas}
                                // onEnd={() => field.onChange(formatIntoPng())}
                                onEnd={() => formatIntoPng()}
                                // onEnd={() => console.log("entrando en onEnd")}
                                penColor="green"
                                canvasProps={{
                                    style: { border: "1px solid green" },
                                }}
                            />
                        )}
                    />
                </SignatureWrapper>
                <input type={"submit"} />
            </form>
        </FormProvider>
    );
};
