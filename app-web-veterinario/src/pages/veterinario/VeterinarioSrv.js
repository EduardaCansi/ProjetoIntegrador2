import api from "../../services/axios-common";

class VeterinarioSrv {
    url = "/veterinarios";

    async getVeterinarios() {
        try {
            const response = await api.get(this.url);
            return response.data;
        } catch (error) { }
    }

}
export default new VeterinarioSrv();
