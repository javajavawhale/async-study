import { fetchURL } from "../utils";

export const output4 =(URLs)=>{
    const promiseArray=[];
    for (const URL of URLs){
        const promise = fetchURL(URL);
        promiseArray.push(promise);
    }
    Promise.all(promiseArray)
        .then((resArr)=>{
            for (const res of resArr) {
                console.log(res);
            }
        })
        .catch((e)=>console.log(e));

}