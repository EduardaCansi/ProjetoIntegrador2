import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import VeterinarioList from "./VeterinarioList";
import VeterinarioSrv from "./VeterinarioSrv";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";

function VeterinarioCon() {
    const [editando] = useState(false);
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

    if (!editando) {
        return (
            <div>
                <Toast ref={toastRef} />
                <VeterinarioList
                    veterinarios={veterinarios}
                    onClickAtualizar={atualizarLista}
                />
            </div>
        );
    }
}

export default VeterinarioCon;
