import { fetchURL } from "../utils"

const timeoutTIme=10000;

export const output2 =(URL)=>{
    console.log('loading...');
    const promise=new Promise ((resolve,reject)=>{
        setTimeout(()=>reject('timeout error'),timeoutTIme);
        fetchURL(URL).then(v=> resolve(v)).catch(e=> reject(e));
    });

    promise
        .then(v=> console.log('success. value:',v))
        .catch(e=> console.log('fail. error:',e));
};