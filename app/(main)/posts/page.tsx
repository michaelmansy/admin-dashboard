import PostsTable from "@/components/posts/PostsTable";
import BackButton from "@/components/BackButton";
import PostsPagination from "@/components/posts/PostsPagination";


export default function PostsPage(){
    return (
        <>
            <BackButton text="Back to Dashboard" link="/" />

            <PostsTable />

            <PostsPagination />
        </>
    )
}