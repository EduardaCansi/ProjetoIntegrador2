import api from "../../services/axios-common";

class VacinaSrv {
    url = "/vacinas";

    async getVacinas() {
        try {
            const response = await api.get(this.url);
            return response.data;
        } catch (error) { }
    }

    async postVacinas(Vacina) {
        try {
            const response = await api.post(this.url, JSON.stringify(Vacina));
            return response.data;
        } catch (error) { }
    }

    async putVacinas(Vacina) {
        try {
            const response = await api.put(this.url, JSON.stringify(Vacina));
            return response.data;
        } catch (error) { }
    }

    async deletVacinas(id) {
        try {
            const response = await api.delete(this.url + "/" + id);
            return response.data;
        } catch (error) { }
    }
}
export default new VacinaSrv();
