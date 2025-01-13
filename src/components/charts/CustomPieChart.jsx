import React, { useEffect, useState } from "react";
import { PieChart, Pie, ResponsiveContainer, Label, Tooltip, Cell } from "recharts";

const generatePieData = ( eventData ) => {
  const tagSum = eventData.tags.reduce((acc, tag) => {
    acc[tag] = 0;
    return acc;
  }, {})

  eventData.transactions.forEach(trans => {
    tagSum[trans.tag] += parseFloat(trans.amount, 10)
  });

  const pieData = Object.entries(tagSum).map(([name, value]) => {
    return { name, value }
  })

  return pieData;
}

const getTotalExpenditure = (pieData) =>
  pieData.reduce((acc, { value }) => acc + value, 0);

const pieColors = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#a4de6c", "#d0ed57"];

const CustomPieChart = ({ eventData }) => {
  const [pieData, setPieData] = useState([])

  useEffect(() => {
    if (eventData) {
      const pieData = generatePieData(eventData);
      console.log("Below is pieData")
      console.log(pieData);
      setPieData(pieData);
    }
  }, [eventData])
  
  return (
    <ResponsiveContainer width={500} height={500}>
      <PieChart>
        <Pie
          data={pieData}
          dataKey="value"
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
        >
          {pieData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={pieColors[index % pieColors.length]} />
          ))}
          {/* Correctly placed Label */}
          <Label
            value={`Total: ${getTotalExpenditure(pieData)}`} 
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