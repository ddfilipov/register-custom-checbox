import { FC, useCallback } from "react";
import { FormProvider, MultipleFieldErrors, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

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

export const ErrorValidationForm: FC = () => {
    const methods = useForm<FormProps>({
        criteriaMode: "all", // SUPER Important for showing multiple errors
    });
    const {
        register,
        handleSubmit,
        formState: { errors },
        trigger,
    } = methods;

    const onSubmit = useCallback((data: FormProps) => {
        console.log(JSON.stringify(data, null, " "));
    }, []);

    const showErrors = useCallback(() => {
        return (
            <div>
                <p>ERRORS</p>
                <ErrorMessage
                    errors={errors}
                    name={`personData.name`}
                    render={({ messages }) => {
                        return getErrors("Name", messages);
                    }}
                />
                <ErrorMessage
                    errors={errors}
                    name={`personData.surname`}
                    render={({ messages }) => {
                        return getErrors("Surname", messages);
                    }}
                />
            </div>
        );
    }, [errors]);

    const getErrors = (fieldName: string, messages: MultipleFieldErrors | undefined) => {
        if (messages) {
            return (
                <>
                    <p>{fieldName}</p>
                    {Object.entries(messages).map(([type, message]) => (
                        <p key={type}>{message}</p>
                    ))}
                </>
            );
        } else return <></>;
    };

    const validateFields = () => {
        trigger("personData");
    };

    return (
        <FormProvider {...methods}>
            <form onSubmit={handleSubmit(onSubmit)}>
                {showErrors()}
                <label htmlFor="personData.name">Name:</label>
                <input
                    {...register("personData.name", {
                        required: "NOMBRE is required!!",
                        minLength: {
                            value: 3,
                            message: "Name should be 3 chars long min.",
                        },
                    })}
                />
                <label htmlFor="personData.name">Surname:</label>
                <input
                    {...register("personData.surname", {
                        required: "SURNAME is required!!",
                        minLength: {
                            value: 3,
                            message: "Surname should be 3 chars long min.",
                        },
                    })}
                />
                <label htmlFor="personData.name">Age:</label>
                <input {...register("personData.age")} />
                <label htmlFor="personData.name">City:</label>
                <input {...register("generalData.city")} />
                <div>
                    <button onClick={validateFields}>VALIDATE</button>
                    <input type="submit" />
                </div>

                <hr />
            </form>
        </FormProvider>
    );
};
