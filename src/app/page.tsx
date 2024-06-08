import Link from "next/link";

export default function HomePage() {
	return (
		<main className="flex flex-col items-center gap-y-5 text-center p-24">
			<h1 className="text-3xl font-semibold">Welcome to my blog</h1>

			<Link href="/posts" className="underline">
				View Posts
			</Link>
		</main>
	);
}
