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
                onClick={() => window.location.href = 'http://localhost:3002/aplicacaoVacinas?pet=' + row._id}
            ></Button>
        </>
    );

    return (
        <div style={{ padding: 15 }}>
            <h4 style={{ textAlign: "center" }}>Meus Pets</h4>

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
                    <Column field="raca" header="Raça"></Column>
                    <Column field="especie" header="Espécie" filter></Column>
                    <Column field="dataNascimento" header="Data Nascimento"></Column>
                    <Column field="pelagem" header="Pelagem"></Column>
                    <Column field="sexo" header="Sexo" filter></Column>
                    <Column field="porte" header="Porte" filter></Column>
                    <Column field="cliente.nome" header="Tutor"></Column>
                    <Column header="Operações" body={operacoes}></Column>
                </DataTable>
            </div>
        </div>
    );
};
export default PetList;
