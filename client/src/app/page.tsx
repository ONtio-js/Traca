import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
		<div className="flex items-center justify-center h-screen">
			<Link href={'/dashboard'} className="py-5 px-10 bg-slate-800 text-white font-medium rounded-md border border-slate-700">Try Traca for Free</Link>
		</div>
  );
}
