import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import posts from "@/data/posts.ts";
import { Post } from "@/types/post";


// Interface for the props of the PostsTable component
interface PostsTableProps {
    limit?: number; // Optional limit for the number of posts to display
    title?: string; // Optional title for the table
}



export default function PostsTable({ limit, title }: PostsTableProps) {

    // sort posts by date in descending order
    const sortedPosts = posts.sort((a: Post, b: Post) => new Date(b.date).getTime() - new Date(a.date).getTime());

    // if limit is passed then slice the posts array to the limit
    const filteredPosts = limit ? sortedPosts.slice(0, limit) : sortedPosts;

    return (
        <div className="mt-3">
            <h3 className="text-2xl mb-4 font-semibold">
                {/* if not title is passed in the PostsTable component in page.tsx then recent posts will be displayed */}
                {title || "Recent Posts"}
            </h3>

            <Table>
                <TableCaption>List of recent posts</TableCaption>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Title</TableHead>
                            <TableHead className="hidden md:table-cell">Author</TableHead>
                            <TableHead className="hidden md:table-cell text-right">Date</TableHead>
                            <TableHead className="hidden md:table-cell">View</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {/* loop through the posts */}
                        {filteredPosts.map((post) => (
                            <TableRow key={post.id}>
                                <TableCell>{post.title}</TableCell>
                                <TableCell className="hidden md:table-cell">{post.author}</TableCell>
                                <TableCell className="hidden md:table-cell text-right">{post.date}</TableCell>
                                <TableCell>
                                    <Link href={`posts/edit/${post.id}`}>
                                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-xs">
                                            Edit
                                        </button>
                                    </Link>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
            </Table>
        </div>
    )
}