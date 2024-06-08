import { createPost } from "@/actions/action";
import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostsPage() {
	const posts = await prisma.post.findMany();
	return (
		<main className="flex flex-col items-center gap-y-5 text-center p-24">
			<h1 className="text-3xl font-semibold">All Posts ({posts.length})</h1>

			<ul className="border-t border-b border-black/10 py-5 leading-8">
				{posts.map((post) => (
					<li key={post.id} className="flex items-center justify-between px-5">
						<Link href={`/posts/${post.slug}`}>{post.title}</Link>
					</li>
				))}
			</ul>

			<form
				action={createPost}
				className="flex flex-col max-w-[400px] mx-auto gap-2 my-10"
			>
				<input
					type="text"
					name="title"
					required
					placeholder="Title for new post"
					className="border rounded px-3 h-10"
				/>
				<textarea
					name="content"
					placeholder="Body content for new post"
					className="border rounded px-3 py-2"
					rows={6}
					required
				></textarea>
				<button className="h-10 bg-blue-500 px-5 rounded text-white">
					Create Post
				</button>
			</form>
		</main>
	);
}
