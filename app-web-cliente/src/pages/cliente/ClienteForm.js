import React from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import "../../App.css";
import { Password } from "primereact/password";
import { InputMask } from 'primereact/inputmask';

const ClienteForm = (props) => {
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
        props.setCliente({ ...props.cliente, [name]: value });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ padding: 15 }}>
                <div className="card">
                    <h4 style={{ textAlign: "center" }}>Cadastro de Clientes</h4>

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
                                defaultValue={props.cliente.nome}
                                onChange={handleInputChange}
                            />
                            {errors.nome && (
                                <span style={{ color: "red" }}>{errors.nome.message}</span>
                            )}
                        </div>
                    </div>

                    <div style={{ padding: 15 }} className="p-fluid grid formgrid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="telefone">Telefone*</label>
                            <InputMask
                                id="telefone"
                                mask="(99) 9 9999-9999"
                                placeholder="(99) 9 9999-9999"
                                onChange={handleInputChange}>
                            </InputMask>
                        </div>
                    </div>

                    <div style={{ padding: 15 }} className="p-fluid grid formgrid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="email">Email*</label>
                            <InputText
                                name="email"
                                {...register("email", {
                                    required: { value: true, message: "Campo obrigatório!" },
                                })}
                                defaultValue={props.cliente.email}
                                onChange={handleInputChange}
                            />
                            {errors.email && (
                                <span style={{ color: "red" }}>{errors.email.message}</span>
                            )}
                        </div>
                    </div>

                    <div style={{ padding: 15 }} className="p-fluid grid formgrid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="senha">Senha*</label>
                            <Password
                                toggleMask
                                name="senha"
                                required="true"
                                defaultValue={props.cliente.senha}
                                onChange={handleInputChange}
                            />
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

export default ClienteForm;
