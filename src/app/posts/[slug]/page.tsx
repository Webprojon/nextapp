import prisma from "@/lib/db";
import { unstable_cache as cache } from "next/cache";

const getCachedPost = cache((slug) => {
	return prisma.post.findUnique({
		where: {
			slug,
		},
	});
});

export default async function PostPage({ params }) {
	const post = await getCachedPost(params.slug);
	//const post = await prisma.post.findUnique({
	//	where: {
	//		slug: params.slug,
	//	},
	//});
	return (
		<main className="flex flex-col items-center gap-y-5 text-center p-24">
			<h1 className="text-3xl font-semibold">{post?.title}</h1>
			<p>{post?.content}</p>
		</main>
	);
}
