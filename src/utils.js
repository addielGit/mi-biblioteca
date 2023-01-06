// import axios from "axios";
import { deleteBooks } from './api/utils';

// NOTIFICATIONS
export const openNotificationSuccess = (api, placement, message) => {
    api.success({
        message: 'Carga de datos.',
        description: message,
        placement,
    });
};

export const openNotificationError = (api, placement, message, status) => {
    api.error({
        message: `${status}`,
        description: message,
        placement,
    });
};

// CONFIRM
export const showDeleteConfirm = (confirm, icon, id) => {
    confirm({
        title: `Eliminar el ejemplar ${id}.`,
        icon: icon,
        content: 'Se eliminará definitivamente del catálogo este ejemplar',
        okText: 'Si',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
            deleteBooks(id);
        },
        onCancel() {
            console.log('Cancel');
        },
    });
};

// PETICIONES HTTP
// export const getBooks = (api, url, setBooks) => {
//     axios.get(`${url}/books`).then((response) => {
//         setBooks(response.data);
//         openNotificationSuccess(api, 'bottomRight', "Datos cargados correctamente.")
//     }).catch(error => {
//         console.log("error", error)
//         openNotificationError(api, 'bottomRight', error.message, error.response.status)
//     });
// };

// export const createBooks = (api, url, setBooks, data) => {
//     axios.post(`${url}/books`, data).then((response) => {
//         openNotificationSuccess(api, 'bottomRight', "Datos cargados correctamente.")
//     }).catch(error => {
//         openNotificationError(api, 'bottomRight', error.message, error.response.status)
//     });
// };

// export const updateBooks = (api, url, setBooks, id, data) => {
//     axios.put(`${url}/books/${id}`, data).then((response) => {
//         openNotificationSuccess(api, 'bottomRight', "Datos cargados correctamente.")
//     }).catch(error => {
//         openNotificationError(api, 'bottomRight', error.message, error.response.status)
//     });
// };

// export const deleteBooks = (api, url, setBooks, id) => {
//     console.log('deleteBooks', id);
//     axios.delete(`${url}/books/${id}`).then((response) => {
//         openNotificationSuccess(api, 'bottomRight', "Ejemplar eliminado correctamente.")
//     }).catch(error => {
//         console.log("error", error)
//         openNotificationError(api, 'bottomRight', error.message, error.response.status)
//     });
// };
