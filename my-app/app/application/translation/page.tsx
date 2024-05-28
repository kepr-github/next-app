'use client'
import { useFormState } from 'react-dom'
import { onFormPostAction } from "./action";
import { redirect } from "next/navigation";
import axios from "axios";

// interface State {
//     message: string;
//   }
import { useState } from "react";
//   const initialState: State = { message: '' }


function formAction(formData: FormData){

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
            return {
                message: 'str',
             }
        //   response.data.pipe(fs.createWriteStream('ada_lovelace.jpg'))
        });


    // try {
    //     await axios.post(`/sample`,
    //       formData
    //     );
    //   } catch (e) {
    //     console.error(e);
    //   }
  
    // redirect("/application/translation/thanks");
  }

function Submit() {
    return (
      <button type="submit" >
        { "送信中..."}
      </button>
    );
  }
  
// translation app　を作成する

export default function TranslationPage() {
    // const [data, setData] = useState("");
    // const [result, dispatch] = useFormState(postAction, {});
    const [state, action] = useFormState(onFormPostAction, {
        message: "",
      });
    const [first, setFirst] = useState("");

    return (
        <div className="bg-gray-200">
            <form action={action}>
                <input
                    className="block mb-2 text-black font-medium text-black-900 dark:text-black"
                    type="text"
                    name="first"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                />
                <button
                    id="submit"
                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    type="submit"
                >
                    送信
                </button>
                <div className="text-gray-700">{state.message}</div>
            </form>
        </div>
    );
    }