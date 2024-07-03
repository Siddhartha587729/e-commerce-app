'use client'
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { useRouter } from "next/navigation";

export default function Browse() {
    const category: string[] = ["Kids", "Enthusiasts", "Artists", "Paintings"];
    const router = useRouter()
    return (
        <div className="mt-10 mx-auto max-w-2xl px-4 sm:pb-6 lg:max-w-7xl lg:px-8">
            {/* Category header */}
            <div className="py-5 flex gap-2 items-center">
                <div className="bg-[#F4538A] h-9 w-3"></div>
                <span className="text-[#F4538A]">Categories</span>
            </div>

            {/* Category cards */}
            <div className="flex flex-col md:flex-row gap-5 ">
                {category.map((cat, index) => (
                    <div
                        className=" hover:cursor-pointer hover:scale-105 drop-shadow-md"
                        key={index}
                        onClick={() => router.push(`/category/${cat}`)}
                    >
                        <Card>
                            <CardHeader>
                                <CardTitle>{cat}</CardTitle>
                                {/* <CardDescription>Card Description</CardDescription> */}
                            </CardHeader>
                            {/* <CardContent>
                  <p>Card Content</p>
                </CardContent>
                <CardFooter>
                  <p>Card Footer</p>
                </CardFooter> */}
                        </Card>
                    </div>
                ))}
            </div>
        </div>
    );
}
