'use client'
import { useFormState, useFormStatus } from "react-dom";
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
    const status = useFormStatus();
    return (
        <button
        id="submit"
        className="bg-green-500 hover:bg-green-700 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
    >
         {status.pending ? "送信中..." : "送信"}
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
        <div >
<div className="text-center justify-center">
<h1 className=" m-4 text-4xl font-extrabold leading-none tracking-tight text-black-900 md:text-5xl lg:text-6xl dark:text-black ">
AI Story Generators: Unleashing Creativity
    </h1>
<p className="m-6 text-lg font-normal text-black-500 lg:text-xl sm:px-16 xl:px-48 dark:text-black-400">
AI story generators are software applications that utilize artificial intelligence techniques, such as natural language processing, computer vision, and generative adversarial networks, to create stories based on your inputs and preferences1. These tools can help you unleash your creativity and write original, engaging, and unique stories.
</p>
</div>

            <form action={action}>
                {/* <input
                    classNameName="block mb-2 text-black font-medium text-black-900 dark:text-black"
                    type="text"
                    name="first"
                    value={first}
                    onChange={(e) => setFirst(e.target.value)}
                /> */}
{/* <div class="m-20 w-72">
  <div class="relative w-full min-w-[300px] h-10">
    <input
      class="peer w-full h-full bg-transparent text-blue-black-700 font-sans font-normal outline outline-1 focus:outline-0 disabled:bg-blue-black-50 disabled:border-0 transition-all placeholder-shown:border placeholder-shown:border-blue-black-200 placeholder-shown:border-t-blue-black-200 border-0 focus:border-2 border-t-transparent focus:border-t-transparent text-sm px-3 py-2.5 rounded-[7px] border-blue-black-200 focus:border-black-900"
      placeholder=" " /><label
      class="flex w-full h-full select-none pointer-events-none absolute left-0 font-normal !overflow-visible truncate peer-placeholder-shown:text-blue-black-500 leading-tight peer-focus:leading-tight peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-black-500 transition-all -top-1.5 peer-placeholder-shown:text-sm text-[11px] peer-focus:text-[11px] before:content[' '] before:block before:box-border before:w-2.5 before:h-1.5 before:mt-[6.5px] before:mr-1 peer-placeholder-shown:before:border-transparent before:rounded-tl-md before:border-t peer-focus:before:border-t-2 before:border-l peer-focus:before:border-l-2 before:pointer-events-none before:transition-all peer-disabled:before:border-transparent after:content[' '] after:block after:flex-grow after:box-border after:w-2.5 after:h-1.5 after:mt-[6.5px] after:ml-1 peer-placeholder-shown:after:border-transparent after:rounded-tr-md after:border-t peer-focus:after:border-t-2 after:border-r peer-focus:after:border-r-2 after:pointer-events-none after:transition-all peer-disabled:after:border-transparent peer-placeholder-shown:leading-[3.75] text-black-500 peer-focus:text-black-900 before:border-blue-black-200 peer-focus:before:!border-black-900 after:border-blue-black-200 peer-focus:after:!border-black-900">Username
    </label>
  </div>
</div>   */}


<textarea id="message" name="message" rows={4} className="block p-2.5 w-full text-sm text-black-900 bg-black-50 rounded-lg border border-black-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-black-700 dark:border-black-600 dark:placeholder-black-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
 placeholder="Write your thoughts here...">

 </textarea>

                <Submit />
                <div className="m-6 text-lg font-normal text-black-500 lg:text-xl sm:px-16 xl:px-48 dark:text-black-400">
                    {state.message}
                    </div>


            </form>
        </div>
    );
    }