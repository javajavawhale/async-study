const statusArray=['success','fail']
// catch.thenで正常系に戻る
export const output3 = ()=>{
    const promise = Promise.resolve(statusArray);
    promise
        .then((v)=>{
            if(v[0]==='success'){
                // これが呼ばれる
                return v;
            } else {
                throw new Error();
            }
        })
        .then((v)=>{
            if(v[1]==='success'){
                return v;
            } else {
                // これが呼ばれる
                throw new Error();
            }
        })
        .catch((e)=>e)
        .then((v)=> console.log('end then run. value:',v));
}