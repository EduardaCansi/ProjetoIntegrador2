import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AplicacaoVacinaList from "./AplicacaoVacinaList";
import AplicacaoVacinaForm from "./AplicacaoVacinaForm";
import AplicacaoVacinaSrv from "./AplicacaoVacinaSrv";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

function AplicacaoVacinaCon() {
    const initialState = { id: null, nome: "" };
    const [aplicacaoVacina, setAplicacaoVacina] = useState(initialState);
    const [editando, setEditando] = useState(false);
    const [aplicacaoVacinas, setAplicacaoVacinas] = useState([]);
    const toastRef = useRef();

    useEffect(() => {
        atualizarLista();
    }, []);

    const atualizarLista = () => {
        AplicacaoVacinaSrv.getAplicacaoVacinas()
            .then((resp) => {
                setAplicacaoVacinas(resp);
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
        AplicacaoVacinaSrv.deletAplicacaoVacinas(_id)
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
        setAplicacaoVacina(initialState);
        setEditando(true);
    };

    const salvar = () => {
        if (aplicacaoVacina._id == null) {
            // inclussão
            AplicacaoVacinaSrv.postAplicacaoVacinas(aplicacaoVacina)
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
            AplicacaoVacinaSrv.putAplicacaoVacinas(aplicacaoVacina)
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
                <AplicacaoVacinaList
                    aplicacaoVacinas={aplicacaoVacinas}
                    inserir={inserir}
                    excluir={excluir}
                    onClickAtualizar={atualizarLista}
                />
            </div>
        );
    } else {
        return (
            <div>
                <Toast ref={toastRef} />
                <AplicacaoVacinaForm
                    aplicacaoVacina={aplicacaoVacina}
                    setAplicacaoVacina={setAplicacaoVacina}
                    salvar={salvar}
                    cancelar={cancelar}
                />
            </div>
        );
    }
}

export default AplicacaoVacinaCon;
