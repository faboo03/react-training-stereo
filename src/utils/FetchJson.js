import axios from "axios";


export default class FetchJson {

    constructor(url) {
        axios.defaults.baseURL = url;
    }
    
    getData = (callback = () => {}, callbackError = (err) => { console.log(err)}) => {
        axios
            .get('/todos')
            .then((res) => {
                callback(res.data);
            })
            .catch((err) => {
                callbackError(err);
            });
    };


    postData = (object, callback = () => {}, callbackError = (err) => { console.log(err)}) => {
        axios
            .post('/todos', object)
            .then((res) => {
                callback(res.data);
            })
            .catch((err) => {
                callbackError(err);
            });
    }

    deleteData = (object, callback = () => {}, callbackError = (err) => { console.log(err)}) => {
        axios
            .delete(`/todos/${object.id}`)
            .then((res) => {
                callback(res.data);
            })
            .catch((err) => {
                callbackError(err);
            });
    } 

    putData = (object, callback = () => {}, callbackError = (err) => { console.log(err)}) => {
        axios
            .put(`/todos/${object.id}`, object)
            .then((res) => {
                callback(res.data);
            })
            .catch((err) => {
                callbackError(err);
            });
    }
    

}