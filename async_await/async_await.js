
//https://stories.sellsuki.co.th/js-201-กับดักอันตราย-promise-async-await-เขียนแล้วพัง-แทนที่จะปัง-6e26a1af1bd1
function timeout(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main(testIndex){
    let api1  = null;
    let api2 = null;
    switch (testIndex) {
        case 1:
            api1 = await callApi1();
            console.log(api1);
            api2 = await callApi2();
            console.log(api2);
            break;
        case 2:
            api1 = callApi1();
            api2 = callApi2();            
            result1 = await api1;
            console.log(result1)
            result2 = await api2;
            console.log(result2);
        default:
            break;
    }
    
}

async function callApi1(){
    await timeout(2000);
    console.log("callApi1");
    return 1;
}


async function callApi2(){
    await timeout(1000);
    console.log("callApi2");
    return 2;
}

main(2);