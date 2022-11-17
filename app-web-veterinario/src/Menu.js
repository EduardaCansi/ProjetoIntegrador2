import { useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";


function Menu() {
    let navigate = useNavigate();

    const items = [
        {
            label: "Clientes",
            icon: "pi pi-fw pi-users",
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
                    label: "Pets",
                    icon: "pi pi-fw pi-list",
                    command: () => {
                        navigate("/pets");
                    },
                },
                {
                    label: "Aplicações",
                    icon: "pi pi-fw pi-list",
                    command: () => {
                        navigate("/aplicacaoVacinas");
                    },
                },
            ],
        },
        {
            label: "Sair",
            icon: "pi pi-fw pi-power-off",
            command: () => {
                sessionStorage.setItem('token',
                    '');
            },
            url: '/'
        },
    ];

    return <Menubar model={items} />;
}

export default Menu;
