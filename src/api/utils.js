import axios from "axios";
import { openNotificationSuccess } from '../utils';
import { URL_BASE } from '../constants';

export const getBooks = (api, setBooks) => {
    axios.get(`${URL_BASE}/books`).then((response) => {
        setBooks(response.data);
        openNotificationSuccess(api, 'bottomRight', "Datos cargados correctamente.");
    }).catch(error => {
        console.log("error", error);
    });
};

export const createBooks = (data) => {
    axios.post(`${URL_BASE}/books`, data).then((response) => {
        console.log("Ejemplar creado correctamente.");
    }).catch(error => {
        console.log("error", error);
    });
};

export const updateBooks = (id, data) => {
    axios.put(`${URL_BASE}/books/${id}`, data).then((response) => {
        console.log("Ejemplar actualizado correctamente.");
    }).catch(error => {
        console.log("error", error);
    });
};

export const deleteBooks = (id) => {
    axios.delete(`${URL_BASE}/books/${id}`).then((response) => {
        console.log("Ejemplar eliminado correctamente.");
    }).catch(error => {
        console.log("error", error);
    });
};
