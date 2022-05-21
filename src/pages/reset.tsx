import supabase from "@/utils/supabase";
import { responseSymbol } from "next/dist/server/web/spec-compliant/fetch-event";
import { FormEvent } from 'react';

export default (props) => {
    const onSubmit = async (e:FormEvent) => {
       e.preventDefault() 
       const password = e.target.password.value
       const passwordRepeat = e.target.password_repeat.value
       if(password===passwordRepeat) {
           const response = await supabase.auth.update({password})
           if (response.error) {
               console.log(response.error)
           } else {
                e.target.reset()
           }
       }
    //    supabase.auth.update({password:})
    }
    return (<div>
        <h1>Reset Password</h1>
        <form action="" onSubmit={onSubmit} className="flex flex-col gap-4 p-4">
            <input className="px-2 py-1 border rounded" type="password" name="password" id="password" />
            <input className="px-2 py-1 border rounded" type="password" name="password_repeat" id="pw" />
            <button>Reset</button>
        </form>
    </div>)
}