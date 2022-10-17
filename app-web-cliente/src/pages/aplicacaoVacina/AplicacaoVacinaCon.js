import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import AplicacaoVacinaList from "./AplicacaoVacinaList";
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

    if (!editando) {
        return (
            <div>
                <Toast ref={toastRef} />
                <ConfirmDialog />
                <AplicacaoVacinaList
                    aplicacaoVacinas={aplicacaoVacinas}
                    onClickAtualizar={atualizarLista}
                />
            </div>
        );
    }
}

export default AplicacaoVacinaCon;
