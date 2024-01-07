import axios from "axios";

const instance = axios.create({
	baseURL: 'https://remedy-server.vercel.app',
	// withCredentials: true,
});

const useAxios = () => {
	return instance;
};

export default useAxios;