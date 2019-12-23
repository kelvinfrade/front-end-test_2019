import api from "./api";

async function getDestination() {
    return await api.get("/api/v1/flights/");
}

export default { getDestination };
