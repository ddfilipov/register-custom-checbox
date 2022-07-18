import React, { useCallback, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { FormDynamicArray } from "./components/forms/FormDynamicArray";
import { Formulario1 } from "./components/forms/Formulario1";
import { SignaturePadTest } from "./components/forms/SignaturePadTest";

function App() {
    // return <FormDynamicArray />;
    return <SignaturePadTest />;
    // return <Formulario1 />;
}

export default App;
