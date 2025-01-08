"use client";
import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#A020F0"];

export default function PieChartComponent({ data }) {
  // Transform the data into a format Recharts can use
  const chartData = Object.entries(data).map(([key, value]) => ({
    name: key,
    value,
  }));

  return (
    <div className="flex flex-col md:flex-row items-center gap-8">
      {/* Pie Chart */}
      <div className="w-full md:w-1/2 h-80">
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              fill="#8884d8"
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      </div>

      {/* Vertical List of Counts */}
      <div className="w-full md:w-1/2 text-white space-y-2">
        <h2 className="text-xl font-bold">Counts by Category</h2>
        <ul className="space-y-1">
          {chartData.map((entry, index) => (
            <li key={index} className="flex justify-between">
              <span>{entry.name}</span>
              <span>{entry.value}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
