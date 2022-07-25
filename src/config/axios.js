import axios from "axios";

import { URL_DEFAULT } from './constants';

const clientAxios = axios.create({
  baseURL: URL_DEFAULT
});

export default clientAxios;