//https://jsonplaceholder.typicode.com/
//https://github.com/axios/axios
const axios = require('axios');

function to(promise) {
    return promise.then(response => {
        //console.log(data);
        return {
            data: response.data,
            error: null,
        }
    }).catch(error => {
        //console.log(error);
        return {
            data: null,
            error: error
        }
    })
}

function main(){
    callBackApi((response,error) => {
        if(error){

        }else{
            console.log(response);
        }
    });
}

async function mainAsync() {
    try{
    let response = await callBackApiPromise();
    //let response = await callBackApi();
    console.log(response);
    }catch(error){
        console.log(error);
    }
} 

function callBackApiPromise() {
    return new Promise((resolve,reject) => {
        callBackApi((response,error) => {
            if(error){
                reject(error);
            }else{
                resolve(response);
            }
        });
    })
}


function callBackApi(callback) {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            // handle success
            return callback(response,null);
        })
        .catch(function (error) {
            // handle error
            return callback(null,error);
        })
        .finally(function () {
            // always executed
        });
}


function callApi1() {
    axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(function (response) {
            // handle success
            console.log(response.data[0]);
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });
}

async function callApi2() {
    try {
        let res = await axios.get('https://jsonplaceholder.typicode.com/posts');
        console.log(res.data[0]);
    } catch (error) {

    } finally {
        console.log("finally")
    }
}

async function callApi3() {
    let { data, error } = await to(axios.get('https://jsonplaceholder.typicode.com/posts'));
    console.log(data);
}

mainAsync();