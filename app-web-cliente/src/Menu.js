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
            label: "Cadastro",
            icon: "pi pi-fw pi-file",
            items: [
                {
                    label: "Pet",
                    icon: "pi pi-fw pi-list",
                    command: () => {
                        navigate("/pets");
                    },
                },
            ],
        },
    ];

    return <Menubar model={items} />;
}

export default Menu;
