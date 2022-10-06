import api from "../../services/axios-common";

class PetSrv {
    url = "/pets";

    async getPets() {
        try {
            const response = await api.get(this.url);
            return response.data;
        } catch (error) { }
    }

    async postPets(Pet) {
        try {
            const response = await api.post(this.url, JSON.stringify(Pet));
            return response.data;
        } catch (error) { }
    }

    async putPets(Pet) {
        try {
            const response = await api.put(this.url, JSON.stringify(Pet));
            return response.data;
        } catch (error) { }
    }

    async deletPets(id) {
        try {
            const response = await api.delete(this.url + "/" + id);
            return response.data;
        } catch (error) { }
    }
}
export default new PetSrv();
