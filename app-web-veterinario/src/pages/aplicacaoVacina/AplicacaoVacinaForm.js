import React, { useEffect, useState } from "react";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useForm } from "react-hook-form";
import "../../App.css";
import PetSrv from "../pet/PetSrv";
import VacinaSrv from "../vacina/VacinaSrv";
import VeterinarioSrv from "../veterinario/VeterinarioSrv";
import { Dropdown } from "primereact/dropdown";
import { InputMask } from "primereact/inputmask";

const AplicacaoVacinaForm = (props) => {

    const [pets, setPets] = useState([]);
    const [vacinas, setVacinas] = useState([]);
    const [veterinarios, setVeterinarios] = useState([]);

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
        props.setAplicacaoVacina({ ...props.aplicacaoVacina, [name]: value });
    };

    const atualizarLista = () => {
        PetSrv.getPets().then((resp) => {
            setPets(
                resp.map((tipo) => ({ label: tipo.nome, value: tipo._id }))
            );
        });
        VacinaSrv.getVacinas().then((resp) => {
            setVacinas(
                resp.map((tipo) => ({ label: tipo.nome, value: tipo._id }))
            );
        });
        VeterinarioSrv.getVeterinarios().then((resp) => {
            setVeterinarios(
                resp.map((tipo) => ({ label: tipo.nome, value: tipo._id }))
            );
        });
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div style={{ padding: 15 }}>
                <div className="card">
                    <h4 style={{ textAlign: "center" }}>Cadastro de Aplicação de Vacinas</h4>

                    <div style={{ padding: 15 }} className="p-fluid grid formgrid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="pet">Pet*</label>
                            <Dropdown
                                name="pet"
                                value={props.aplicacaoVacina.pet}
                                options={pets}
                                onChange={handleInputChange}
                                placeholder="Selecione o Pet"
                            />
                        </div>
                    </div>

                    <div style={{ padding: 15 }} className="p-fluid grid formgrid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="vacina">Vacina*</label>
                            <Dropdown
                                name="vacina"
                                value={props.aplicacaoVacina.vacina}
                                options={vacinas}
                                onChange={handleInputChange}
                                placeholder="Selecione a Vacina"
                            />
                        </div>
                    </div>

                    <div style={{ padding: 15 }} className="p-fluid grid formgrid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="dataAplicacao">Data Aplicação*</label>
                            <InputMask
                                name="dataAplicacao"
                                required="true"
                                mask="99/99/9999"
                                placeholder="99/99/9999"
                                slotChar="dd/mm/yyyy"
                                defaultValue={props.aplicacaoVacina.dataAplicacao}
                                onChange={handleInputChange}>
                            </InputMask>

                        </div>
                    </div>

                    <div style={{ padding: 15 }} className="p-fluid grid formgrid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="dataReaplicacao">Data Reapliação</label>
                            <InputMask
                                name="dataReaplicacao"
                                mask="99/99/9999"
                                placeholder="99/99/9999"
                                slotChar="dd/mm/yyyy"
                                defaultValue={props.aplicacaoVacina.dataReaplicacao}
                                onChange={handleInputChange}>
                            </InputMask>
                        </div>
                    </div>

                    <div style={{ padding: 15 }} className="p-fluid grid formgrid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="obs">Obs</label>
                            <InputText
                                name="obs"
                                defaultValue={props.aplicacaoVacina.obs}
                                onChange={handleInputChange}
                                placeholder="Observações"
                            />
                        </div>
                    </div>

                    <div style={{ padding: 15 }} className="p-fluid grid formgrid">
                        <div className="field col-12 md:col-4">
                            <label htmlFor="veterinario">Veterinario*</label>
                            <Dropdown
                                name="veterinario"
                                value={props.aplicacaoVacina.veterinario}
                                options={veterinarios}
                                onChange={handleInputChange}
                                placeholder="Selecione o Veterinario"
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

export default AplicacaoVacinaForm;
