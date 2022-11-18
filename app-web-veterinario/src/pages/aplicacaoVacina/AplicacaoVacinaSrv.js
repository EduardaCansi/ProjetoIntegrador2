import api from "../../services/axios-common";

class AplicacaoVacinaSrv {
    url = "/aplicacaoVacinas";

    async listarByPet(PetId) {
        try {
            const response = await api.get('/aplicacaoVacinasByPet/' + PetId);
            return response.data;
        } catch (error) { }
    }

    async getAplicacaoVacinas() {
        try {
            const response = await api.get(this.url);
            return response.data;
        } catch (error) { }
    }

    async postAplicacaoVacinas(AplicacaoVacina) {
        try {
            const response = await api.post(this.url, JSON.stringify(AplicacaoVacina));
            return response.data;
        } catch (error) { }
    }

    async deletAplicacaoVacinas(id) {
        try {
            const response = await api.delete(this.url + "/" + id);
            return response.data;
        } catch (error) { }
    }
}
export default new AplicacaoVacinaSrv();
