import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import '../../App.css';

const VeterinarioList = (props) => {
    const operacoes = (row) => (
        <>
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
            <h4 style={{ textAlign: "center" }}>Manter Veterinarios</h4>

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
                    value={props.veterinarios}
                    paginator
                    responsiveLayout="scroll"
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Pagina {first} de {totalRecords}"
                    rows={10}
                    rowsPerPageOptions={[10, 20, 50]}
                    selectionMode="single"
                    selection={props.veterinario}
                    onSelectionChange={(e) => props.setVeterinarios(e.value)}
                >
                    <Column field="nome" header="Nome" sortable filter></Column>
                    <Column field="crmv" header="CRMV" sortable filter></Column>
                    <Column field="telefone" header="Telefone" sortable filter></Column>
                    <Column header="Operações" body={operacoes}></Column>
                </DataTable>
            </div>
        </div>
    );
};
export default VeterinarioList;
