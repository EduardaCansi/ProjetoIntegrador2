import React, { useEffect, useRef, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ClienteForm from "./ClienteForm";
import ClienteSrv from "./ClienteSrv";
import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import { Toast } from "primereact/toast";
import jwtDecode from "jwt-decode";

function ClienteCon() {
    const initialState = { id: null, nome: "" };
    const [perfil, setPerfil] = useState(initialState);
    const toastRef = useRef();

    useEffect(() => {
        getPerfil();
    }, []);

    const getPerfil = () => {
        const token = sessionStorage.getItem('token')
        const usuarioLogado = jwtDecode(token)
        ClienteSrv.obterPeloId(usuarioLogado._id)
            .then((resp) => {
                setPerfil(resp);
            })
            .catch((e) => {
                toastRef.current.show({
                    severity: "error",
                    summary: e.message,
                    life: 3000,
                });
            });
    };

    const salvar = () => {
        if (perfil._id == null) {
            // inclussão
            ClienteSrv.postClientes(perfil)
                .then((resp) => {
                    getPerfil();
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
            ClienteSrv.putClientes(perfil)
                .then((resp) => {
                    getPerfil();
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

    return (
        <div>
            <Toast ref={toastRef} />
            <ClienteForm
                cliente={perfil}
                setCliente={setPerfil}
                salvar={salvar}
            />
        </div>
    );

}

export default ClienteCon;
