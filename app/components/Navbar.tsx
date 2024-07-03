"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { Brush, ShoppingCart, ScanFace } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useShoppingCart } from "use-shopping-cart";
import { LogIn, UserRoundCheck } from "lucide-react";
import { useState } from "react";
import Image from "next/image";

const links = [
    { name: "Home", href: "/" },
    { name: "Kids", href: "/category/Kids" },
    { name: "Enthusiasts", href: "/category/Enthusiasts" },
    { name: "Artists", href: "/category/Artists" },
];

export default function Navbar() {
    const { data: session } = useSession();
    const pathname = usePathname();
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

    const { handleCartClick } = useShoppingCart();
    const handleLogout = () => {
        signOut({ callbackUrl: "/" });
    };

    return (
        <header className="mb-4 pb-2">
            <div className="flex items-center justify-between mx-auto my-4 max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
                <Link href="/">
                    <h1 className="flex justify-center items-center gap-1 text-2xl md:text-3xl font-sans font-bold">
                        <Brush color="#59D5E0" size={60} />
                        <span className="hidden md:flex">Art </span>
                        <span className="hidden md:flex text-[#59D5E0]">Gallery</span>
                    </h1>
                </Link>
                <nav className="hidden gap-8 lg:flex 2xl:ml-16 ">
                    {links.map((link, index) => (
                        <div key={index}>
                            {pathname === link.href ? (
                                <Link href={link.href} className="text-lg font-semibold bg-[#59D5E0] rounded-3xl p-2 text-white drop-shadow-xl">
                                    {link.name}
                                </Link>
                            ) : (
                                <Link href={link.href} className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-[#FAA300]">
                                    {link.name}
                                </Link>
                            )}
                        </div>
                    ))}
                </nav>
                <div className="flex gap-3 ">
                    <button className="rounded-full bg-[#F5DD61] p-2 flex justify-center items-center drop-shadow-xl" onClick={() => handleCartClick()}>
                        <ShoppingCart />
                    </button>
                    <button onClick={handleClick} className="rounded-full bg-[#F5DD61] p-2 flex justify-center items-center drop-shadow-xl">
                        {session ? (
                            <UserRoundCheck />
                        ) : (
                            <LogIn />
                        )}
                    </button>
                    {isOpen && session && session.user && (
                        <div className="absolute right-16 top-16 mt-2 bg-white rounded-lg shadow-lg ring-1 ring-gray-200 divide-y divide-gray-200">
                            <div className="px-4 py-3">
                                <div className="flex items-center gap-3">
                                    {session.user.image && (
                                        <Image
                                            className="w-10 h-10 rounded-full"
                                            src={session.user.image}
                                            alt="User Avatar"
                                            width={40}
                                            height={40}
                                        />
                                    )}
                                    <div>
                                        <p className="text-sm font-medium text-gray-900">{session.user.name}</p>
                                        <p className="text-sm text-gray-500">{session.user.email}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                    <div className="bg-[#F5DD61] rounded-full flex justify-center items-center p-2 drop-shadow-xl font-semibold">
                        {session ? (
                            <button onClick={handleLogout}>Logout</button>
                        ) : (
                            <button className="flex justify-center items-center" onClick={() => signIn()}>
                                LogIn
                            </button>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}
