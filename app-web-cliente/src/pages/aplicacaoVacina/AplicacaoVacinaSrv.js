import api from "../../services/axios-common";

class AplicacaoVacinaSrv {
    url = "/aplicacaoVacinas";

    async listarByPet(PetId) {
        try {
            const response = await api.get('/aplicacaoVacinasByPet/' + PetId);
            return response.data;
        } catch (error) { }
    }

}
export default new AplicacaoVacinaSrv();
