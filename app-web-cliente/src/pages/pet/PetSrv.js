import api from "../../services/axios-common";

class PetSrv {
    url = "/pets";

    async getPets() {
        try {
            const response = await api.get(this.url);
            return response.data;
        } catch (error) { }
    }
}
export default new PetSrv();
