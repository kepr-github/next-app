'use client'
import { useFormState } from 'react-dom'
import { redirect } from "next/navigation";
import axios from "axios";

import { LambdaClient, InvokeCommand } from '@aws-sdk/client-lambda'

const initialState = { message: '' }


export async function loginAction(state: any, formData: FormData) {

    const user_id = formData.get('file')
    const password = formData.get('password')
    console.log(user_id)
    if (user_id instanceof File) {
        console.log(user_id.name)
    } else {
        console.log('No file uploaded')
    }
    console.log(password)
    axios({
        method: 'get',
        url: 'https://jbupu1xz8j.execute-api.ap-northeast-1.amazonaws.com/Prod/hello/',
      })
        .then(function (response) {
            console.log(response.data)
        //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        });


    try {
        await axios.post(`/sample`,
          formData
        );
      } catch (e) {
        console.error(e);
      }
  
    redirect("/application/translation/thanks");
  }
// translation app　を作成する

export default function TranslationPage() {
    const [state, formAction] = useFormState(loginAction, initialState)
    return (
<form action={formAction}>
<label className="block mb-2 text-sm font-medium text-gray-900 dark:text-black" for="file_input">Upload file</label>
<input className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400" name="file" id="file_input" type="file"></input>
<input type="password" name="password" placeholder="Password"></input>
<p className="mt-1 text-sm text-gray-500 dark:text-gray-300" id="file_input_help">SVG, PNG, JPG or GIF (MAX. 800x400px).</p>
<button id="submit"
  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
  type="submit">
  送信
</button>

</form>
    );
    }