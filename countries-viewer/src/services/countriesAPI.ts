import axios from 'axios';

const countriesAPI = axios.create({
	baseURL: 'https://restcountries.eu/rest/v2'
});

export default countriesAPI;
