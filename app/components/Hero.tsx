"use client"
import Image from "next/image";
import { client, urlFor } from "../lib/sanity";
import Link from "next/link";
import LottieAnimation from "./LottieAnimation";
import { useEffect, useState } from "react";
import { signIn, useSession } from "next-auth/react"


async function getData() {
    const query = "*[_type=='Pimage'][0]";

    const data = await client.fetch(query);
    return data;
}

export default function Hero() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    /* const {data: session} = useSession();
    console.log(session) */

    /* useEffect(() => {
        async function fetchData() {
            try {
                const result = await getData();
                setData(result);
            } catch (err) {
                setError("Failed to fetch data. Please try again later.");
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, []); */


    return (
        <section className="mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8 ">
            <div className="w-full flex flex-wrap justify-between">
                <div className="mb-6 flex w-full md:w-1/2 flex-col justify-center sm:mb-2 lg:mb-0">
                    <h1 className="flex flex-col mb-4 text-2xl font-bold text-black sm:text-3xl md:mb-8 md:text-4xl">
                        Welcome to  <span className="text-6xl text-[#59D5E0]">The <span className="text-[#F4538A] drop-shadow-xl ">Art</span> Gallery</span>
                    </h1>
                    <p className="w-full text-wrap leading-relaxed text-gray-500 xl:text-lg">
                        We sell only the most exclusive product, come shop with us
                    </p>
                    
                </div>
                <div className="flex justify-center items-center w-full md:w-1/2">
                    <div className="w-full">
                        <LottieAnimation />
                    </div>
                </div>
                <div className="">
                        <p className="text-gray-600">Donot miss out on interesting deals, <span onClick={() => signIn()} className="text-[#59D5E0]">SignUp</span> now</p>
                </div>
                {/* <div className="mb-12 flex w-full md:mb-16 lg:w-2/3">
                    <div className="relative left-12 top-12 z-10 -ml-12 overflow-hidden rounded-lg bg-gray-100 shadow-lg md:left-16 md:top-16 lg:ml-0">
                        <Image
                            src={urlFor(data.image1).url()}
                            alt="Photo"
                            className="h-full w-full object-cover object-center"
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className="overflow-hidden rounded-lg bg-gray-100 shadow-lg">
                        <Image
                            src={urlFor(data.image2).url()}
                            alt="Photo"
                            className="h-full w-full object-cover object-center"
                            width={500}
                            height={500}
                            priority
                        />
                    </div>
                </div> */}
            </div>

            {/* <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
                <div className="flex h-12 w-72 divide-x overflow-hidden rounded-lg border">
                    <Link href='/Kids' className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
                        Kids
                    </Link>
                    <Link href='/Enthusiasts' className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
                        Enthusiasts
                    </Link>
                    <Link href='/Artists' className="flex w-1/3 items-center justify-center text-gray-500 transition duration-100 hover:bg-gray-100 active:bg-gray-200">
                        Artists
                    </Link>
                </div>
            </div> */}
        </section>
    )
}