import { TrendingUp } from "lucide-react";
import {
  CartesianGrid,
  Line,
  LineChart,
  XAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const chartData = [
  { month: "January", desktop: 186, mobile: 80 },
  { month: "February", desktop: 305, mobile: 200 },
  { month: "March", desktop: 237, mobile: 120 },
  { month: "April", desktop: 73, mobile: 190 },
  { month: "May", desktop: 209, mobile: 130 },
  { month: "June", desktop: 214, mobile: 140 },
];

export default function ChartLineDots() {
  return (
    <div className="bg-white rounded-lg p-6 shadow">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Line Chart - Dots</h2>
        <p className="text-gray-500 text-sm">January - June 2024</p>
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={chartData} margin={{ left: 12, right: 12 }}>
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="month"
            tickLine={false}
            axisLine={false}
            tickMargin={8}
            tickFormatter={(value) => value.slice(0, 3)}
          />
          <Tooltip />
          <Line
            type="natural"
            dataKey="desktop"
            stroke="#6366F1"
            strokeWidth={2}
            dot={{ fill: "#6366F1" }}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
      <div className="mt-4 text-sm text-gray-600">
        <div className="flex items-center gap-2 font-medium">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div>
        <p className="text-muted-foreground">
          Showing total visitors for the last 6 months
        </p>
      </div>
    </div>
  );
}
