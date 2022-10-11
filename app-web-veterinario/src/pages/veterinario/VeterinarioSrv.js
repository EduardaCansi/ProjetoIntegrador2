import api from "../../services/axios-common";

class VeterinarioSrv {
    url = "/veterinarios";

    async getVeterinarios() {
        try {
            const response = await api.get(this.url);
            return response.data;
        } catch (error) { }
    }

    async postVeterinarios(Veterinario) {
        try {
            const response = await api.post(this.url, JSON.stringify(Veterinario));
            return response.data;
        } catch (error) { }
    }

    async putVeterinarios(Veterinario) {
        try {
            const response = await api.put(this.url, JSON.stringify(Veterinario));
            return response.data;
        } catch (error) { }
    }

    async deletVeterinarios(id) {
        try {
            const response = await api.delete(this.url + "/" + id);
            return response.data;
        } catch (error) { }
    }
}
export default new VeterinarioSrv();
