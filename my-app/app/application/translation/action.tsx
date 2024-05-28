"use server";
import axios from "axios";


type FormState = {
  message: string;
}

export async function onFormPostAction(prevState: FormState, formdata: FormData) {
   // Process the data
    console.log(formdata)
   const mes = formdata.get('message')
   console.log(mes)

   
  //  let res = await axios({
  //   method: 'get',
  //   url: 'https://s77tdveqqk.execute-api.ap-northeast-1.amazonaws.com/Prod/hello',
  // })
  //   .then(function (response) {
  //       const res:string = response.data['message']
  //       let result =  mes + res ;
  //       return {message: result}
  //   //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))

  // })
  // console.log(res)
  const url = "https://s77tdveqqk.execute-api.ap-northeast-1.amazonaws.com/Prod/"; // サンプルコード用、実際リクエストはしない
  const data = {
    "message":mes
  };
  console.log(data)
  const response = await axios.post(url, data);
  console.log(response)
  const res:string = response.data['message']
  return {message: res}
  
    }
