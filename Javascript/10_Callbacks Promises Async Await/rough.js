function apiData(){
    return new Promise((res, rej)=>{
        setTimeout(()=>{
            res("Success");
        }, 2000)
    })
}


const data = apiData();
data.then((res)=>{
    console.log(res);
})
console.log("here");

async function getData(){
    const data = await apiData();
    console.log("I am here");
    console.log(data, "from async function");
}

getData();