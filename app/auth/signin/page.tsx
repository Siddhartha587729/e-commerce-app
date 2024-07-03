"use client"
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect, FormEvent } from "react";
import LottieAnimation from "../../components/LottieAnimation";

const SignIn: React.FC = () => {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    useEffect(() => {
        if (status === "authenticated") {
            setTimeout(()=>{
                router.push("/");
            },3000)
        }
    }, [status, router]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        await signIn("credentials", {
            username,
            password,
            callbackUrl: `${window.location.origin}`,
        });
    };

    return (
        <div className="md:h-screen flex justify-center m-2">
            <div className="md:w-[80%] md:h-[80%] flex flex-col lg:flex-row justify-center items-center gap-2">
                <div className="md:w-1/2 h-full flex justify-center items-center">
                    <div className=" rounded-2xl p-2 md:border-r-2">
                        <LottieAnimation />
                        <div className="text-xl md:text-4xl font-serif">
                            SignIn <span className="text-3xl md:text-5xl text-[#F4538A]">Now</span>
                        </div>
                    </div>
                </div>
                <div className="md:w-1/2">
                    <div className=" rounded-2xl md:border-l-2 flex flex-col items-center justify-center  py-2">
                        <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-lg flex flex-col justify-around">
                            <h1 className="text-2xl font-bold text-center">Sign<span className="text-3xl text-[#F4538A]">In</span></h1>
                            {status !== "authenticated" ? (
                                <>
                                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
                                        <div className="rounded-md shadow-sm -space-y-px">
                                            <div>
                                                <label htmlFor="username" className="sr-only">
                                                    Username
                                                </label>
                                                <input
                                                    type="text"
                                                    id="username"
                                                    name="username"
                                                    value={username}
                                                    onChange={(e) => setUsername(e.target.value)}
                                                    className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                    placeholder="Username"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="password" className="sr-only">
                                                    Password
                                                </label>
                                                <input
                                                    type="password"
                                                    id="password"
                                                    name="password"
                                                    value={password}
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    className="relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                                    placeholder="Password"
                                                />
                                            </div>
                                        </div>
                                        <div>
                                            <button
                                                type="submit"
                                                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                            >
                                                Sign in with Credentials
                                            </button>
                                        </div>
                                    </form>
                                    <hr className="my-6 border-gray-300 w-full" />
                                    <button
                                        onClick={() => signIn("github")}
                                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500"
                                    >
                                        Sign in with GitHub
                                    </button>
                                </>
                            ) : (
                                <>
                                    <p className="text-center text-gray-600">Signed in as {session?.user?.email}</p>
                                    <button
                                        onClick={() => signOut()}
                                        className="mt-6 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                                    >
                                        Sign out
                                    </button>
                                </>
                            )}
                        </div>
                    </div></div>
            </div>
        </div>
    );
};

export default SignIn;
