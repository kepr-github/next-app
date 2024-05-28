"use server";
import axios from "axios";


type FormState = {
  message: string;
}

export async function onFormPostAction(prevState: FormState, data: FormData) {
   // Process the data
   const resp = 'ddddd'

   
   let res = await axios({
    method: 'get',
    url: 'https://jbupu1xz8j.execute-api.ap-northeast-1.amazonaws.com/Prod/hello/',
  })
    .then(function (response) {
        const res:string = response.data['message']
        return {message: res}
    //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))

  })
  console.log(res)
  return res
  
    }
