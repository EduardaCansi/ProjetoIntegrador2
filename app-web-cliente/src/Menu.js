import { useNavigate } from "react-router-dom";
import { Menubar } from "primereact/menubar";


function Menu() {
    let navigate = useNavigate();

    const items = [
        {
            label: "Pets",
            icon: "pi pi-fw pi-list",
            command: () => {
                navigate("/");
            },
        },
        {
            label: "Consultas",
            icon: "pi pi-fw pi-file",
            items: [
                {
                    label: "Veterinarios",
                    icon: "pi pi-fw pi-users",
                    command: () => {
                        navigate("/veterinarios");
                    },
                },
                {
                    label: "Meu Perfil",
                    icon: "pi pi-fw pi-user",
                    command: () => {
                        navigate("/clientes");
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
