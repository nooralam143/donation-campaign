import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";

const data = [
    { name: "Total Donation", value: 12 },
    { name: "Your Donation", value: 4 },
];

const COLORS = ["#FF444A", "#00C49F"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
}) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
        <text
            x={x}
            y={y}
            fill="white"
            textAnchor={x > cx ? "start" : "end"}
            dominantBaseline="central"
        >
            {`${(percent * 100).toFixed(0)}%`}
        </text>
    );
};

const PIcharts = () => {
    return (
        <div className="container mx-auto flex justify-center items-center">
<ResponsiveContainer width={420} height={400}>
        <PieChart>
            <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                label={renderCustomizedLabel}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip></Tooltip>
            <Legend></Legend>
        </PieChart>
        </ResponsiveContainer>
        </div>
        
    );
};

export default PIcharts;
