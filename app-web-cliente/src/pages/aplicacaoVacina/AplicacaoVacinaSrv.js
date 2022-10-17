import api from "../../services/axios-common";

class AplicacaoVacinaSrv {
    url = "/aplicacaoVacinas";

    async getAplicacaoVacinas() {
        try {
            const response = await api.get(this.url);
            return response.data;
        } catch (error) { }
    }

}
export default new AplicacaoVacinaSrv();
