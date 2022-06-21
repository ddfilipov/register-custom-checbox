import React, { useCallback, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormDynamicArray } from "./components/forms/FormDynamicArray";
import { Formulario1 } from "./components/forms/Formulario1";

function App() {
    return <FormDynamicArray />;
    // return <Formulario1 />;
}

export default App;
