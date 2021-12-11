import axios from "axios"

const apiClient = axios.create({
	baseURL: "http://192.168.43.1:19006/api/v1/",
});

export default apiClient;
