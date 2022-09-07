import React, { useCallback, useEffect } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { ErrorValidationForm } from "./components/forms/ErrorValidationForm";
import { FormDynamicArray } from "./components/forms/FormDynamicArray";
import { Formulario1 } from "./components/forms/Formulario1";
import { SignatureCanvasTest } from "./components/forms/SignatureCanvasTest";

function App() {
    return <ErrorValidationForm />;
}

export default App;
