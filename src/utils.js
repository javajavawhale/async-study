export async function sampleAsync(isSuccess) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(isSuccess) {resolve('success');}
            else {reject('fail');}
            },1000)
    });
}