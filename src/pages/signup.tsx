import { FormEvent, useState } from "react";
import supabase from "@/utils/supabase";
import { useRouter } from "next/router";

export default function SignUp() {
    const router = useRouter()
    const [user, setUser] = useState(null);
    const onSubmit = async (e: FormEvent) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        const response = await supabase.auth.signUp({ email, password });
        console.log({response})
        setUser(response.user)
        router.push('/login')
    }

    return <div>
        <h1 className="text-xl font-bold py-8">Log in</h1>
        <form action="" onSubmit={onSubmit} className="flex flex-col gap-2">
            <div>
                <label htmlFor="email">Email</label>
            <input type="email" id="email" className="border px-2 py-1 rounded" />
                </div>
            <div>
                <label htmlFor="password">Password</label>
            <input type="password" id="password" className="border px-2 py-1 rounded" />
            </div>
            <button type="submit" className="bg-gray-300 rounded px-2 py-1">Login</button>
        </form>
        User:<pre>{JSON.stringify(user, null, 2)}</pre>
    </div>
}