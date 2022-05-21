import { useEffect, useState } from "react";
import Head from "next/head";
import { supabaseServerClient } from "@supabase/supabase-auth-helpers/nextjs";
import supabase from "@/utils/supabase";

function useSupaRealtime() {
    useEffect(() => {
        const mySubscription = supabase
            .from("*")
            .on("*", (payload) => {
                console.log("Change received!", payload);
            })
            .subscribe();
        return () => {
            mySubscription.unsubscribe()
        }
    }, []);
}



export default function Home(props) {
    useSupaRealtime()
    const user = supabase.auth.user();
    useEffect(() => {
        console.log({ props, user });
    }, [props, user]);

    const onSubmitTodo = async (e: FormEvent) => {
        e.preventDefault();
        const newTodo = {
            description: e.target.description.value,
            list_id: e.target.list_id.value,
        };
        const response = await supabase.from("todos").insert(newTodo);
        console.log(response);
        if (!response.error) {
            e.target.reset();
        }
    };

    const onSubmitList = async (e: FormEvent) => {
        e.preventDefault();
        const newList = {
            name: e.target.name.value,
            user_id: user.id,
        };
        const response = await supabase
            .from("lists")
            .insert(newList)
            .then(console.log);
    };

    return (
        <div>
            <Head>
                <title>#Todos</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div className="h-screen">
                <main className="py-8 max-w-screen-md mx-auto">
                    <h1 className="text-2xl font-bold py-8">#Todo</h1>
                    <div className="flex flex-col gap-4 w-full">
                        {props?.lists?.map((list, i) => (
                            <div
                                key={i}
                                className="border rounded p-4 flex flex-col gap-4"
                            >
                                <h2 className="text-lg text-blue-700 font-bold">
                                    {list.name}
                                </h2>
                                <ul>
                                    {list.todos.map((todo, i) => {
                                        const toggleTodo = async () => {
                                            console.log({ toggle: todo });
                                            const response = await supabase
                                                .from("todos")
                                                .update({
                                                    completed_at: new Date(),
                                                })
                                                .eq("id", todo.id);
                                            console.log(response.data);
                                        };
                                        return (
                                            <li key={i}>
                                                {todo.description}
                                                <button onClick={toggleTodo}>
                                                    {todo.completed_at
                                                        ? "✔️"
                                                        : "⬜"}
                                                </button>
                                            </li>
                                        );
                                    })}
                                    <form
                                        action=""
                                        className="flex gap-2 my-2"
                                        onSubmit={onSubmitTodo}
                                    >
                                        <input
                                            type="text"
                                            name="description"
                                            className="flex-grow border rounded px-2 py-1"
                                        />
                                        <input
                                            hidden={true}
                                            type="text"
                                            name="list_id"
                                            value={list.id}
                                        />
                                        <button className="border aspect-square rounded bg-blue-100 min-w-[2rem]">
                                            +
                                        </button>
                                    </form>
                                </ul>
                            </div>
                        ))}
                        <form
                            onSubmit={onSubmitList}
                            className="flex gap-2 my-2 w-full"
                        >
                            <input
                                type="text"
                                name="name"
                                className="border rounded px-2 py-1"
                            />
                            <button className="border aspect-square rounded bg-blue-100 min-w-[2rem]">
                                +
                            </button>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
}

async function getProps(ctx) {
    const supa = supabaseServerClient(ctx);
    const { data: lists } = await supa.from("lists").select('*, todos("*")');
    const { data: todos } = await supa.from("todos").select("*");

    return {
        props: {
            lists,
            todos,
        },
    };
}

export const getServerSideProps = getProps;
// export const getServerSideProps = withAuthRequired({
//     redirectTo: "/login",
//     getServerSideProps: getProps,
// });
