import api from "../../services/axios-common";

class PetSrv {
    url = "/pets";

    async getPets() {
        try {
            const response = await api.get(this.url);
            return response.data;
        } catch (error) { }
    }

    async obterPeloId(id) {
        return await api.get(this.url + "/" + id).catch((err) => {
            throw err;
        });
    }
}
export default new PetSrv();
