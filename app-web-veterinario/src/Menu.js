import { useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";


function Menu() {
    let navigate = useNavigate();

    const items = [
        {
            label: "Home",
            icon: "pi pi-fw pi-home",
            command: () => {
                navigate("/");
            },
        },
        {
            label: "Cadastros",
            icon: "pi pi-fw pi-file",
            items: [
                {
                    label: "Vacinas",
                    icon: "pi pi-fw pi-list",
                    command: () => {
                        navigate("/vacinas");
                    },
                },
            ],
        },
        {
            label: "Consultas",
            icon: "pi pi-fw pi-file",
            items: [
                {
                    label: "Veterinarios",
                    icon: "pi pi-fw pi-list",
                    command: () => {
                        navigate("/veterinarios");
                    },
                },
                {
                    label: "Clientes",
                    icon: "pi pi-fw pi-list",
                    command: () => {
                        navigate("/clientes");
                    },
                },
            ],
        },
    ];

    return <Menubar model={items} />;
}

export default Menu;
