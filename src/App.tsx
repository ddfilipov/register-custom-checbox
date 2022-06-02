import React, { useCallback, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Checkbox } from "./Checkbox";
import { Checkbox2 } from "./Checkbox2";
import { Formulario } from "./Formulario";
import { Input } from "./Input";
import * as Mat from "@material-ui/core";
import { CheckboxFinal } from "./CheckboxFinal";

interface FormProps {
    nombre: string;
    rojo: boolean;
    custom1: boolean;
    custom2: boolean;
    checkboxFinal: boolean;
    checkVanilla: boolean;
    materialCheck: boolean;
    apellido: string;
}
function App() {
    const methods = useForm<FormProps>();
    const { register, handleSubmit, watch } = methods;

    const watchCheck1 = watch("custom1");
    const watchCheck2 = watch("custom2");
    const watchAll = watch();
    // console.log(watchCheck1);
    // console.log(watchCheck2);

    const onSubmit = useCallback((data: FormProps) => {
        alert(JSON.stringify(data, null, " "));
    }, []);

    useEffect(() => {
        console.log(watchAll);
    }, [watchCheck1, watchCheck2, watchAll]);

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* <label htmlFor="nombre">Nombre</label> */}
                {/* <input type="text" {...register("nombre")} /> */}
                {/* <Mat.Input {...register("apellido")} /> */}
                <input type="checkbox" {...register("checkVanilla")} />
                <label htmlFor="checkVanilla">Check vanilla</label>
                <Checkbox label="Checkbox Custom 1" register={{ ...register("custom1") }} name={"custom1"} />
                <CheckboxFinal
                    label="Checkbox Final"
                    register={{ ...register("checkboxFinal") }}
                    name={"checkboxFinal"}
                />
                {/* <Input label="Input Custom" name="apellido" register={{ ...register("apellido") }} /> */}
                <Checkbox2 label="Checkbox Custom 2" register={{ ...register("custom2") }} name={"custom2"} />
                <Mat.Checkbox {...register("materialCheck")} />
                <label htmlFor="materialCheck">Material Check</label>
                {/* <label htmlFor="azul">Azul</label>
                <input type="checkbox" {...register("azul")} /> */}
                <input type="submit" style={{ display: "block" }} />
            </form>
        </FormProvider>
    );
}

export default App;
