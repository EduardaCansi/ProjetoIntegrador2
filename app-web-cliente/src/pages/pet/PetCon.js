import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import PetList from "./PetList";
import PetSrv from "./PetSrv";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import { ConfirmDialog } from "primereact/confirmdialog";
import jwtDecode from "jwt-decode";

function PetCon() {
    const [editando] = useState(false);
    const [pets, setPets] = useState([]);
    const toastRef = useRef();

    useEffect(() => {
        atualizarLista();
    }, []);

    const atualizarLista = () => {
        const token = sessionStorage.getItem('token')
        const usuarioLogado = jwtDecode(token)
        PetSrv.listarByCliente(usuarioLogado._id)
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

    if (!editando) {
        return (
            <div>
                <Toast ref={toastRef} />
                <ConfirmDialog />
                <PetList
                    pets={pets}
                    onClickAtualizar={atualizarLista}
                />
            </div>
        );
    }
}

export default PetCon;
