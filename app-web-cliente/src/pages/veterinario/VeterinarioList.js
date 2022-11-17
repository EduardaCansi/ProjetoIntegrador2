import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import '../../App.css';

const VeterinarioList = (props) => {


    return (
        <div style={{ padding: 15 }}>
            <h4 style={{ textAlign: "center" }}>Veterinarios</h4>

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
                    <Column field="crmv" header="Crmv"></Column>
                    <Column field="telefone" header="Telefone"></Column>
                </DataTable>
            </div>
        </div>
    );
};
export default VeterinarioList;
