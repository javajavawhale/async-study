import { sampleAsync } from "../utils"

// fetchURLでrejectされると、エラーがthrowされる
export const output5= async (isSuccess)=> {
    try{
        const res= await sampleAsync(isSuccess);
        console.log('success! value:', res);
    }catch(e){
        console.log('error! error:',e)
    }
}
