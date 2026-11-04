import {ArrowLeftCircle} from "lucide-react";
import Link from "next/link";


// create the interface for the props of the BackButton component
interface BackButtonProps{
    text: string; // text to display on the button
    link: string; // link to navigate to when the button is clicked
}


export default function BackButton({ text, link }: BackButtonProps) {
    return (
        <Link href={link} className="flex items-center gap-2 text-blue-500 hover:text-blue-700 font-bold mb-5">
            <ArrowLeftCircle size={18} />
            {text}
        </Link>
    )
}