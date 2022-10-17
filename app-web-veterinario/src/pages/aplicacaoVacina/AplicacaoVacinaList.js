import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import '../../App.css';
import React from "react";

const AplicacaoVacinaList = (props) => {

    const operacoes = (row) => (
        <>
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
            <h4 style={{ textAlign: "center" }}>Manter Aplicações de Vacinas</h4>

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
                    value={props.aplicacaoVacinas}
                    paginator
                    responsiveLayout="scroll"
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Pagina {first} de {totalRecords}"
                    rows={10}
                    rowsPerPageOptions={[10, 20, 50]}
                    selectionMode="single"
                    selection={props.aplicacaoVacina}
                    onSelectionChange={(e) => props.setAplicacaoVacinas(e.value)}
                >
                    <Column field="pet.nome" header="Pet" sortable filter></Column>
                    <Column field="vacina.nome" header="Vacina" filter></Column>
                    <Column field="dataAplicacao" header="Data Aplicação"></Column>
                    <Column field="dataReaplicacao" header="Data Reaplicação"></Column>
                    <Column field="obs" header="Obs"></Column>
                    <Column field="veterinario.nome" header="Veterinario" filter></Column>
                    <Column header="Operações" body={operacoes}></Column>
                </DataTable>
            </div>
        </div>
    );
};
export default AplicacaoVacinaList;
