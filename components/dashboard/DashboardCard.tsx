import {
  Card,
  CardContent
} from "@/components/ui/card"
import { Newspaper } from "lucide-react"
import { LucideIcon } from "lucide-react"


// we want to pass the cards dynamically so will create an interface then pass them as props in line 19
// then in the home page add the props to the DasboardCard
interface DashboardCardProps{
    title: string,
    count: number,
    icon: React.ReactElement<LucideIcon>
}



export default function DashboardCard({title, count, icon}: DashboardCardProps) {
    return (
        <Card className="bg-slate-100 dark:bg-slate-100 p-4 pb-0">
            <CardContent>
                <h3 className="text-3xl text-center mb-4 font-bold text-slate-500 dark:text-slate-200">
                    {title}
                </h3>
                <div className="flex gap-5 justify-center items-center mb-3">
                {icon}
                <h3 className="text-5xl font-semibold text-slate-500 dark:text-slate-200">
                    {count}
                </h3>
                </div>
            </CardContent>
        </Card>
    )
}