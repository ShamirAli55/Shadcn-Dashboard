import AppBarChart from "@/components/AppBarChart"
import AppAreaChart from "@/components/AppAreaChart"
import { AppPieChart } from "@/components/AppPieChart"
import CardList from "@/components/CardList"
import TodoList from "@/components/TodoList"
import AppLineChart from "@/components/AppLineChart"
const Homepage = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 2xl:grid-cols-4 gap-4">
      <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppBarChart />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <CardList title="Latest Transactions" />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <AppPieChart />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <TodoList/>
      </div>
      <div className="bg-primary-foreground rounded-lg p-4 lg:col-span-2 xl:col-span-1 2xl:col-span-2">
        <AppAreaChart />
      </div>
      <div className="bg-primary-foreground rounded-lg p-4">
        <AppLineChart />
      </div>
    </div>
  )
}

export default Homepage