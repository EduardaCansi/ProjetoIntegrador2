import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import '../../App.css';
import React from "react";

const AplicacaoVacinaList = (props) => {

    return (
        <div style={{ padding: 15 }}>
            <h4 style={{ textAlign: "center" }}>Registro de Vacinas Aplicadas</h4>

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
                    <Column field="pet.nome" header="Pet"></Column>
                    <Column field="vacina.nome" header="Vacina" filter></Column>
                    <Column field="dataAplicacao" header="Data Aplicação"></Column>
                    <Column field="dataReaplicacao" header="Data Reaplicação"></Column>
                    <Column field="obs" header="Obs"></Column>
                    <Column field="veterinario.nome" header="Veterinario" filter></Column>
                </DataTable>
            </div>
        </div>
    );
};
export default AplicacaoVacinaList;
