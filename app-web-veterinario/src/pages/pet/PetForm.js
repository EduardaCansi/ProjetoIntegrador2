import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import "../../App.css";
import ClienteSrv from "../cliente/ClienteSrv";
import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";

const PetForm = (props) => {

    const [clientes, setClientes] = useState([]);

    const dentroCliente = (new URLSearchParams(window.location.search)).get("cliente");

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const onSubmit = (data) => {
        props.salvar();
    };

    useEffect(() => {
        atualizarLista();
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        props.setPet({ ...props.pet, [name]: value });
    };

    const atualizarLista = () => {
        ClienteSrv.getClientes().then((resp) => {
            setClientes(
                resp.map((tipo) => ({ label: tipo.nome, value: tipo._id }))
            );
        });

    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ padding: 15 }}>
                <div className="card">
                    <h4 style={{ textAlign: "center" }}>Cadastro de Animal</h4>

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
                                defaultValue={props.pet.nome}
                                onChange={handleInputChange}
                                placeholder="Digite o nome"
                            />
                            {errors.nome && (
                                <span style={{ color: "red" }}>{errors.nome.message}</span>
                            )}
                        </div>
                    </div>

                    <div style={{ padding: 15 }} className="p-fluid grid formgrid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="raca">Raça</label>
                            <InputText
                                name="raca"
                                {...register("raca", {
                                    maxLength: {
                                        value: 100,
                                        message: "O campo deve ter no máximo 100 caracteres!",
                                    }
                                })}
                                defaultValue={props.pet.raca}
                                onChange={handleInputChange}
                                placeholder="Digite o raça"
                            />
                            {errors.raca && (
                                <span style={{ color: "red" }}>{errors.raca.message}</span>
                            )}
                        </div>
                    </div>

                    <div style={{ padding: 15 }} className="p-fluid grid formgrid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="especie">Espécie*</label>
                            <InputText
                                name="especie"
                                {...register("especie", {
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
                                defaultValue={props.pet.especie}
                                onChange={handleInputChange}
                                placeholder="Digite a espécie"
                            />
                            {errors.especie && (
                                <span style={{ color: "red" }}>{errors.especie.message}</span>
                            )}
                        </div>
                    </div>

                    <div style={{ padding: 15 }} className="p-fluid grid formgrid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="dataNascimento">Data Nascimento*</label>
                            <InputMask
                                name="dataNascimento"
                                required="true"
                                mask="99/99/9999"
                                placeholder="99/99/9999"
                                slotChar="dd/mm/yyyy"
                                defaultValue={props.pet.dataNascimento}
                                onChange={handleInputChange}>
                            </InputMask>

                        </div>
                    </div>

                    <div style={{ padding: 15 }} className="p-fluid grid formgrid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="pelagem">Pelagem</label>
                            <InputText
                                name="pelagem"
                                {...register("pelagem", {
                                    maxLength: {
                                        value: 100,
                                        message: "O campo deve ter no máximo 100 caracteres!",
                                    }
                                })}
                                defaultValue={props.pet.pelagem}
                                onChange={handleInputChange}
                                placeholder="Digite a pelagem"
                            />
                            {errors.pelagem && (
                                <span style={{ color: "red" }}>{errors.pelagem.message}</span>
                            )}
                        </div>
                    </div>

                    <div style={{ padding: 15 }} className="p-fluid grid formgrid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="sexo">Sexo*</label>
                            <InputText
                                name="sexo"
                                {...register("sexo", {
                                    required: { value: true, message: "Campo obrigatório!" },
                                    maxLength: {
                                        value: 1,
                                        message: "O campo deve ter no máximo 1 caracteres!",
                                    },
                                    minLength: {
                                        value: 1,
                                        message: "O campo deve ter no mínimo 1 caracteres!",
                                    },
                                })}
                                defaultValue={props.pet.sexo}
                                onChange={handleInputChange}
                                placeholder="M ou F"
                            />
                            {errors.sexo && (
                                <span style={{ color: "red" }}>{errors.sexo.message}</span>
                            )}
                        </div>
                    </div>

                    <div style={{ padding: 15 }} className="p-fluid grid formgrid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="porte">Porte*</label>
                            <InputText
                                name="porte"
                                {...register("porte", {
                                    required: { value: true, message: "Campo obrigatório!" },
                                    maxLength: {
                                        value: 1,
                                        message: "O campo deve ter no máximo 1 caracteres!",
                                    },
                                    minLength: {
                                        value: 1,
                                        message: "O campo deve ter no mínimo 1 caracteres!",
                                    },
                                })}
                                defaultValue={props.pet.porte}
                                onChange={handleInputChange}
                                placeholder="P, M ou G"
                            />
                            {errors.porte && (
                                <span style={{ color: "red" }}>{errors.porte.message}</span>
                            )}

                        </div>
                    </div>

                    {!dentroCliente &&
                        <div style={{ padding: 15 }} className="p-fluid grid formgrid">
                            <div className="field col-12 md:col-4">
                                <label htmlFor="cliente">Tutor*</label>
                                <Dropdown
                                    name="cliente"
                                    value={props.pet.cliente}
                                    options={clientes}
                                    onChange={handleInputChange}
                                    placeholder="Selecione o Tutor"
                                />

                            </div>
                        </div>}

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

export default PetForm;
