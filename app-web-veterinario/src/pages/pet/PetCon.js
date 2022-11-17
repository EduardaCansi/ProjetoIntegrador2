import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PetList from "./PetList";
import PetForm from "./PetForm";
import PetSrv from "./PetSrv";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

function PetCon() {
    const initialState = { id: null, nome: "" };
    const [pet, setPet] = useState(initialState);
    const [editando, setEditando] = useState(false);
    const [pets, setPets] = useState([]);
    const toastRef = useRef();

    useEffect(() => {
        atualizarLista();
    }, []);

    const atualizarLista = () => {
        PetSrv.getPets()
            .then((resp) => {
                setPets(resp);
                toastRef.current.show({
                    severity: "sucess",
                    summary: "Lista atualizada",
                    life: 3000,
                });
            })
            .catch((e) => {
                toastRef.current.show({
                    severity: "error",
                    summary: e.message,
                    life: 3000,
                });
            });
    };

    const editar = (_id) => {
        const pet = pets.find((pet) => pet._id == _id)
        setPet({
          ...pet,
          cliente: pet.cliente._id
        });
        setEditando(true);
      };

    const excluir = (_id) => {
        confirmDialog({
            message: "Confirmar a exclusão?",
            header: "Confirmação",
            icon: "pi pi-,question",
            acceptLabel: "Sim",
            rejectLabel: "Não",
            acceptClassName: "p-button-help p-button-outlined",
            rejectClassName: "p-button-help",
            accept: () => excluirConfirm(_id),
        });
    };

    const excluirConfirm = (_id) => {
        PetSrv.deletPets(_id)
            .then((resp) => {
                atualizarLista();
                toastRef.current.show({
                    severity: "success",
                    summary: "Excluído",
                    life: 2000,
                });
            })
            .catch((e) => {
                toastRef.current.show({
                    severity: "error",
                    summary: e.message,
                    life: 4000,
                });
            });
    };

    // operação inserir
    const inserir = () => {
        setPet(initialState);
        setEditando(true);
    };

    const salvar = () => {
        if (pet._id == null) {
            // inclussão
            PetSrv.postPets(pet)
                .then((resp) => {
                    setEditando(false);
                    atualizarLista();
                    toastRef.current.show({
                        severity: "success",
                        summary: "Salvou",
                        life: 2000,
                    });
                })
                .catch((e) => {
                    toastRef.current.show({
                        severity: "error",
                        summary: e.message,
                        life: 4000,
                    });
                });
        } else {
            // alteração
            PetSrv.putPets(pet)
                .then((resp) => {
                    setEditando(false);
                    atualizarLista();
                    toastRef.current.show({
                        severity: "success",
                        summary: "Salvou",
                        life: 2000,
                    });
                })
                .catch((e) => {
                    toastRef.current.show({
                        severity: "error",
                        summary: e.message,
                        life: 4000,
                    });
                });
        }
    };

    const cancelar = () => {
        setEditando(false);
    };

    if (!editando) {
        return (
            <div>
                <Toast ref={toastRef} />
                <ConfirmDialog />
                <PetList
                    pets={pets}
                    inserir={inserir}
                    editar={editar}
                    excluir={excluir}
                    onClickAtualizar={atualizarLista}
                />
            </div>
        );
    } else {
        return (
            <div>
                <Toast ref={toastRef} />
                <PetForm
                    pet={pet}
                    setPet={setPet}
                    salvar={salvar}
                    cancelar={cancelar}
                />
            </div>
        );
    }
}

export default PetCon;
