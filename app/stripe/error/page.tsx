import Link from "next/link";

export default function ErrorStripe() {
  return (
    <div className="min-h-screen md:min-h-[80vh] flex items-center justify-center flex-col gap-3">
        <h1 className="text-4xl font-bold text-gray-800 pd-10">An error occurred, Your Transaction was canceled...</h1>
        <span className="">Go back to <Link href='/' className="text-[#F4538A]">Home</Link> page</span>
    </div>
)
  }

