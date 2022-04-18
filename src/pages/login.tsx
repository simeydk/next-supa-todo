import { FormEvent } from "react";
import supabase from "@/utils/supabase";

export default function Login() {
    const onSubmit = async (e: FormEvent) => {
        const email = e.target.email.value
        alert(email)
        await supabase.auth.signIn({ email });
    }

    return <div>
        <h1 className="text-xl font-bold py-8">Log in</h1>
        <form action="" onSubmit={onSubmit} className="block">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" className="border px-2 py-1 rounded" />
            <button type="submit" className="bg-gray-300 rounded px-2 py-1">Login</button>
        </form>
    </div>
}