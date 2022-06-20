import { FC, useCallback } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Checkbox } from "./Checkbox";
// import styled from "styled-components";

interface FormProps {
    nombre: string;
    rojo: boolean;
    azul: boolean;
}

export const Formulario: FC = () => {
    // const [checked, setChecked] = useState(false);
    const methods = useForm<FormProps>();
    const { register, handleSubmit } = methods;

    const onSubmit = useCallback((data: FormProps) => {
        alert(JSON.stringify(data));
    }, []);

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <label htmlFor="nombre">Nombre</label>
                <input type="text" {...register("nombre")} />
                <label htmlFor="rojo">Nombre</label>
                <input type="checkbox" {...register("rojo")} />
                {/* <label htmlFor="azul">Nombre</label>
                <input type="checkbox" {...register("azul")} /> */}
                {/* 
                <Checkbox label="Azul Custom" register={{ ...register("azul") }} /> */}

                <input type={"submit"}>SUBMIT!</input>
            </form>
        </FormProvider>
    );
};
