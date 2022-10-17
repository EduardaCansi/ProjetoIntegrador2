import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ClienteList from "./ClienteList";
import ClienteSrv from "./ClienteSrv";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import { ConfirmDialog } from "primereact/confirmdialog";

function ClienteCon() {
    const [editando] = useState(false);
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


    if (!editando) {
        return (
            <div>
                <Toast ref={toastRef} />
                <ConfirmDialog />
                <ClienteList
                    clientes={clientes}
                    onClickAtualizar={atualizarLista}
                />
            </div>
        );
    }
}

export default ClienteCon;
