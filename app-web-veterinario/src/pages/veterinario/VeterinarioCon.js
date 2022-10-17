import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import VeterinarioList from "./VeterinarioList";
import VeterinarioForm from "./VeterinarioForm";
import VeterinarioSrv from "./VeterinarioSrv";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

function VeterinarioCon() {
    const initialState = { id: null, nome: "" };
    const [veterinario, setVeterinario] = useState(initialState);
    const [editando, setEditando] = useState(false);
    const [veterinarios, setVeterinarios] = useState([]);
    const toastRef = useRef();

    useEffect(() => {
        atualizarLista();
    }, []);

    const atualizarLista = () => {
        VeterinarioSrv.getVeterinarios()
            .then((resp) => {
                setVeterinarios(resp);
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
        setVeterinario(
            veterinarios.filter((veterinario) => veterinario._id == _id)[0]
        );
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
        VeterinarioSrv.deletVeterinarios(_id)
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
        setVeterinario(initialState);
        setEditando(true);
    };

    const salvar = () => {
        if (veterinario._id == null) {
            // inclussão
            VeterinarioSrv.postVeterinarios(veterinario)
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
            VeterinarioSrv.putVeterinarios(veterinario)
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
                <VeterinarioList
                    veterinarios={veterinarios}
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
                <VeterinarioForm
                    veterinario={veterinario}
                    setVeterinario={setVeterinario}
                    salvar={salvar}
                    cancelar={cancelar}
                />
            </div>
        );
    }
}

export default VeterinarioCon;
