import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ClienteList from "./ClienteList";
import ClienteForm from "./ClienteForm";
import ClienteSrv from "./ClienteSrv";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import { ConfirmDialog, confirmDialog } from "primereact/confirmdialog";

function ClienteCon() {
    const initialState = { id: null, nome: "" };
    const [cliente, setCliente] = useState(initialState);
    const [editando, setEditando] = useState(false);
    const [clientes, setClientes] = useState([]);
    const toastRef = useRef();

    useEffect(() => {
        atualizarLista();
    }, []);

    const atualizarLista = () => {
        ClienteSrv.getClientes()
            .then((resp) => {
                setClientes(resp);
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
        setCliente(
            clientes.filter((cliente) => cliente._id == _id)[0]
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
        ClienteSrv.deletClientes(_id)
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
        setCliente(initialState);
        setEditando(true);
    };

    const salvar = () => {
        if (cliente._id == null) {
            // inclussão
            ClienteSrv.postClientes(cliente)
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
            ClienteSrv.putClientes(cliente)
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
                <ClienteList
                    clientes={clientes}
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
                <ClienteForm
                    cliente={cliente}
                    setCliente={setCliente}
                    salvar={salvar}
                    cancelar={cancelar}
                />
            </div>
        );
    }
}

export default ClienteCon;
