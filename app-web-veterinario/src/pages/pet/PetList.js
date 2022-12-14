import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import '../../App.css';
import React from "react";

const PetList = (props) => {
    const operacoes = (row) => (
        <>
            <Button
                type="button"
                icon="pi pi-eye"
                className="p-button-raised p-button-rounded p-button-text p-button-help"
                label="Vacinas"
                onClick={() => window.location.href = 'http://localhost:3001/aplicacaoVacinas?pet=' + row._id}
            ></Button>
            <Button
                type="button"
                icon="pi pi-pencil"
                className="p-button-raised p-button-rounded p-button-text p-button-help"
                label="Editar"
                onClick={() => props.editar(row._id)}
            ></Button>
            <Button
                type="button"
                icon="pi pi-trash"
                className="p-button-raised p-button-rounded p-button-text p-button-help"
                label="Excluir"
                onClick={() => props.excluir(row._id)}
            ></Button>
        </>
    );

    return (
        <div style={{ padding: 15 }}>
            <h4 style={{ textAlign: "center" }}>Listagem de Pets</h4>

            <div style={{ textAlign: "end", padding: 5 }}>
                <Button
                    type="button"
                    icon="pi pi-plus"
                    className="p-button-raised p-button-rounded p-button-text p-button-help"
                    label="Inserir"
                    onClick={props.inserir}
                ></Button>
            </div>

            <div className="card">
                <DataTable
                    value={props.pets}
                    paginator
                    responsiveLayout="scroll"
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Pagina {first} de {totalRecords}"
                    rows={10}
                    rowsPerPageOptions={[10, 20, 50]}
                    selectionMode="single"
                    selection={props.pet}
                    onSelectionChange={(e) => props.setPets(e.value)}
                >
                    <Column field="nome" header="Nome" sortable filter></Column>
                    <Column field="raca" header="Ra??a"></Column>
                    <Column field="especie" header="Esp??cie" filter></Column>
                    <Column field="dataNascimento" header="Data Nascimento"></Column>
                    <Column field="pelagem" header="Pelagem"></Column>
                    <Column field="sexo" header="Sexo" filter></Column>
                    <Column field="porte" header="Porte" filter></Column>
                    <Column field="cliente.nome" header="Tutor"></Column>
                    <Column header="Opera????es" body={operacoes}></Column>
                </DataTable>
            </div>
        </div>
    );
};
export default PetList;
