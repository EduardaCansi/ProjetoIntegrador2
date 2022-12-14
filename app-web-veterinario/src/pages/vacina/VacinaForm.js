import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import "../../App.css";

const VacinaForm = (props) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        props.salvar();
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        props.setVacina({ ...props.vacina, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ padding: 15 }}>
                <div className="card">
                    <h4 style={{ textAlign: "center" }}>Cadastro de Vacinas</h4>

                    <div style={{ padding: 15 }} className="p-fluid grid formgrid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="nome">Nome*</label>
                            <InputText
                                name="nome"
                                {...register("nome", {
                                    required: { value: true, message: "Campo obrigatório!" },
                                    maxLength: {
                                        value: 100,
                                        message: "O campo deve ter no máximo 100 caracteres!",
                                    },
                                    minLength: {
                                        value: 2,
                                        message: "O campo deve ter no mínimo 2 caracteres!",
                                    },
                                })}
                                defaultValue={props.vacina.nome}
                                onChange={handleInputChange}
                                placeholder="Digite o nome da Vacina"
                            />
                            {errors.nome && (
                                <span style={{ color: "red" }}>{errors.nome.message}</span>
                            )}
                        </div>
                    </div>

                    <div style={{ textAlign: "center", padding: 8 }}>
                        <Button
                            type="submit"
                            icon="pi pi-check"
                            className="p-button-raised p-button-rounded p-button-text p-button-help"
                            label="Salvar"
                        ></Button>
                        <Button
                            type="button"
                            icon="pi pi-times"
                            className="p-button-raised p-button-rounded p-button-text p-button-help"
                            label="Cancelar"
                            onClick={props.cancelar}
                        ></Button>
                    </div>
                </div>
            </div>
        </form>
    );
};

export default VacinaForm;
