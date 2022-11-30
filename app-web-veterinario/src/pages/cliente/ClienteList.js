import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import '../../App.css';

const ClienteList = (props) => {
    const operacoes = (row) => (
        <>
            <Button
                type="button"
                icon="pi pi-eye"
                className="p-button-raised p-button-rounded p-button-text p-button-help"
                label="Pets"
                onClick={() => window.location.href = 'http://localhost:3001/pets?cliente=' + row._id}
            ></Button>
        </>
    );

    return (
        <div style={{ padding: 15 }}>
            <h4 style={{ textAlign: "center" }}>Listagem de Clientes</h4>

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
                    value={props.clientes}
                    paginator
                    responsiveLayout="scroll"
                    paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
                    currentPageReportTemplate="Pagina {first} de {totalRecords}"
                    rows={10}
                    rowsPerPageOptions={[10, 20, 50]}
                    selectionMode="single"
                    selection={props.cliente}
                    onSelectionChange={(e) => props.setClientes(e.value)}
                >
                    <Column field="nome" header="Nome" sortable filter></Column>
                    <Column field="telefone" header="Telefone"></Column>
                    <Column field="email" header="E-mail"></Column>
                    <Column header="Operações" body={operacoes}></Column>
                </DataTable>
            </div>
        </div>
    );
};
export default ClienteList;
