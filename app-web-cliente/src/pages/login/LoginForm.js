import { Toast } from "primereact/toast";
import { InputText } from "primereact/inputtext";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "primereact/button";
import LoginSrv from '../login/LoginSrv'

const LoginForm = (props) => {

    const handleInputChange = (event) => {
        const { id, value } = event.target;
        setCredenciais({ ...credenciais, [id]: value });
    };

    const { register, handleSubmit, setError, formState: { errors } } = useForm();
    const toastRef = useRef();
    const [credenciais, setCredenciais] = useState({ "email": "", "senha": "" })
    const onSubmit = data => {
        LoginSrv.login(credenciais).then(response => {
            let token = response.data;
            if (token) {
                sessionStorage.setItem('token', token);
                window.location = "/";
            } else {
                toastRef.current.show({ severity: 'error', summary: 'Erro no login', life: 5000 });
            }
        }).catch(({ response }) => {
            toastRef.current.show({ severity: 'error', summary: response.data, life: 5000 });
        });
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <Toast ref={toastRef} />
            <div className="card"
                style={{ width: '500px', textAlign: "center", marginLeft: '30%', marginTop: '10%', backgroundColor: "Honeydew" }}>
                <h2 style={{ textAlign: "center" }}>Login Cliente</h2>

                <br></br>
                <div className="p-fluid grid formgrid">
                    <div className="field col-12 md:col-4">
                        <label htmlFor="email">Email</label>
                        <InputText type={'text'} id="email" className="p-inputtext-sm block mb-2"
                            {...register("email", {
                                required: { value: true, message: "Email é obrigatória" },
                                minLength: { value: 2, message: "Tamanho mínimo é 2" },
                            })}
                            defaultValue={credenciais.email} onKeyUp={handleInputChange} />
                        {errors.email && <span style={{ color: 'red' }}>{errors.email.message}</span>}
                    </div>
                </div>

                <div className="p-fluid grid formgrid">
                    <div className="field col-12 md:col-4">
                        <label htmlFor="senha">Senha</label>
                        <InputText type={'password'} id="senha" className="p-inputtext-sm block mb-2"
                            {...register("senha", {
                                required: { value: true, message: "Senha é obrigatória" },
                                minLength: { value: 2, message: "Tamanho mínimo é 2" },
                            })}
                            defaultValue={credenciais.senha} onKeyUp={handleInputChange} />
                        {errors.senha && <span style={{ color: 'red' }}>{errors.senha.message}</span>}
                    </div>
                </div>
                <br />
                <div style={{ textAlign: "center", padding: 8 }}>
                    <Button icon="pi pi-sign-in" type="submit" label="Login" className="p-button-raised p-button-rounded p-button-text" />
                </div>
                <div style={{ textAlign: "center", padding: 8 }}>
                    <Button
                        icon="pi pi-user"
                        type="button"
                        label="Área Veterinario"
                        className="p-button-raised p-button-rounded p-button-text"
                        onClick={() => window.location.href = 'http://localhost:3001'} />
                </div>
            </div>
        </form>
    );
};

export default LoginForm;