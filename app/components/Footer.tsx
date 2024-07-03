import { Brush } from "lucide-react";
import Link from "next/link";
const Footer = () => {
    return (
      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <h2 className="text-2xl font-bold flex "><Brush/>Art Gallery</h2>
            </div>
            <div className="flex space-x-4">
              <Link href="/" className="hover:text-gray-400">Home</Link>
              <Link href="/display" className="hover:text-gray-400">Products</Link>
              <Link href="https://x.com/Siddhartha294" target="_blank" className="hover:text-gray-400">Contact</Link>
              <Link href="https://github.com/Siddhartha587729/e-commerce-app" target="_blank" className="hover:text-gray-400">GitHub</Link>
            </div>
          </div>
          <div className="mt-6 text-center text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Art Gallery. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  