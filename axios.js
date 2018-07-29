import axios from 'axios';

const instance= axios.create();

instance.defaults.baseURL ="http://www.theaudiodb.com/api/v1/json/1/";

export default instance;