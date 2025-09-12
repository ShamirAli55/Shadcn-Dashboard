import AppBarChart from "@/components/AppBarChart"
import AppAreaChart from "@/components/AppAreaChart"
import { AppPieChart } from "@/components/AppPieChart"
const Homepage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">Test</div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">Test</div>
      <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">Test</div>
    </div>
  )
}

export default Homepage