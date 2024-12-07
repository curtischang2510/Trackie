import React from "react";
import { PieChart, Pie, ResponsiveContainer, Label, Tooltip } from "recharts";

const CustomPieChart = ({ data }) => {
  return (
    <ResponsiveContainer width={500} height={500}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
        >
          {/* Correctly placed Label */}
          <Label
            value="Pages of my website"
            position="center"
            style={{ fontSize: "16px", fontWeight: "bold" }}
          />
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default CustomPieChart;