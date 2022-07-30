// console.log(1);
// console.log(2);
// // async
// setTimeout(() => {
//     console.log('callback function fired 1');
// }, 2000);
// console.log(3);
// setTimeout(() => {
//     console.log('callback function fired 2');
// }, 2000);
// console.log(4);
const getTodos = (resource,callb) => {
    const request = new XMLHttpRequest();
    //track the progress of the request
    //request.readyState is 0,1,2,3,4
    request.addEventListener('readystatechange', () => {
        //console.log(request, request.readyState)
        if(request.readyState === 4 && request.status === 200)
        {
            const data = JSON.parse(request.responseText);
            callb(undefined, data);
        }
        else if(request.readyState === 4)
        {
            callb('could not fetch data',undefined);
        }
    });
    
    request.open('get',resource);
    request.send();
}
// console.log(1);
// console.log(2);
// getTodos('todos/jacker.json',(err,data) => {
//     //console.log('callback fired!');
//     //console.log(err, data);
//     //error
//     // if(err){
//     //     console.log(err);
//     // }
//     // //no error
//     // else{
//     //     console.log(data);
//     // }
//     console.log(data);
//     getTodos('todos/heared.json',(err,data) => {
//         console.log(data);
//         getTodos('todos/johnny.json',(err,data) => {
//             console.log(data);
//         })
//     })
// });
// console.log(3);
// console.log(4);

const getSomething = () => {
    return new Promise()
}