"use server";
import axios from "axios";


type FormState = {
  message: string;
}

export async function onFormPostAction(prevState: FormState, data: FormData) {
   // Process the data
    console.log(data)
   const mes = data.get('message')
   console.log(mes)

   
   let res = await axios({
    method: 'get',
    url: 'https://s77tdveqqk.execute-api.ap-northeast-1.amazonaws.com/Prod/hello',
  })
    .then(function (response) {
        const res:string = response.data['message']
        let result =  mes + res ;
        return {message: result}
    //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))

  })
  console.log(res)
  return res
  
    }
