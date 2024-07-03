import { client } from "../lib/sanity"
import { simplifiedProduct } from "../interface";
import Link from "next/link";
import Image from "next/image";

async function getData() {
    const query = `*[_type=='product'] | order(_createdAt desc){
        _id,name,price,"slug":slug.current,
          "categoryName":category->name,
          "imageUrl":images[0].asset->url
      }
      `

    const data = await client.fetch(query);
    return data;
}

async function page() {
    const data: simplifiedProduct[] = await getData();
    return (
        <div className='min-h-screen'>
            <div className='mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:px-8'>
                <div className="py-5 flex gap-2 items-center">
                    <div className="bg-[#F4538A] h-9 w-3"></div>
                    <span className="text-[#F4538A]">All Our New Arivals</span>
                </div>
                <div>
                    <div className=" grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                        {data.map((product) => (
                            <div key={product._id} className="group relative rounded-xl flex flex-col p-2 gap-2">
                                <div className="h-2/3 aspect-square w-full overflow-hidden rounded-md bg-[#cdf0f3] p-1 group-hover:scale-105 hover:cursor-pointer ">

                                    <Link href={`/product/${product.slug}`}>
                                        <Image
                                            src={product.imageUrl}
                                            alt="Product image"
                                            className="w-full h-full object-center object-cover lg:h-full lg:w-full rounded-md"

                                            width={100}
                                            height={100}
                                        />
                                    </Link>
                                </div>
                                <div className="h-1/3 flex flex-col px-2">
                                    <div >
                                        <h3 className="text-lg font-bold">
                                            <Link href={`/product/${product.slug}`}>
                                                {product.name}
                                            </Link>
                                        </h3>
                                        <p className="text-sm text-gray-400">Category: <span className="text-gray-600">{product.categoryName}</span></p>
                                    </div>
                                    <div className="flex gap-2">
                                        <span className="text-sm font-medium text-gray-900">₹{product.price}</span>
                                        <span className="text-sm font-medium text-red-500 line-through">₹{(product.price * 1.8).toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default page