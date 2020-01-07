let data1 = {
    id : 1,
    name : "SC Team"
}

let arrayData1 = [
    {
        id : 1,
        name : "SC Team"
    },
    {
        id : 2,
        name : "POS Team"
    }
]


console.log(`data1 = ${data1.id}`);
let data2 = data1;
data2.id = 2;
console.log(`data2 = ${data2.id}`);
console.log(`data1 = ${data1.id}`);

 //=============================================

// console.log(`data1 = ${data1.id}`);
// let data2 = {...data1};
// data2.id = 2;
// console.log(`data2 = ${data2.id}`);
// console.log(`data1 = ${data1.id}`);

 //=============================================

// console.log(`arraydata1 = ${arrayData1[0].id}`);
// let arrayData2 = arrayData1;
// arrayData2[0].id = 2;
// console.log(`arraydata2 = ${arrayData2[0].id}`);
// console.log(`arrraydata1 = ${arrayData1[0].id}`);

 //=============================================

// console.log(`arraydata1 = ${arrayData1[0].id}`);
// let arrayData2 = [{...arrayData1}];
// arrayData2[0].id = 2;
// console.log(`arraydata2 = ${arrayData2[0].id}`);
// console.log(`arrraydata1 = ${arrayData1[0].id}`);