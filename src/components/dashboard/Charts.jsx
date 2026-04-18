import { useSelector } from "react-redux";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

function Charts() {
  const tasks = useSelector((state) => state.tasks.list);

  const completed = tasks.filter((t) => t.completed).length;
  const pending = tasks.length - completed;

  const data = [
    { name: "Completed", value: completed },
    { name: "Pending", value: pending },
  ];

  const COLORS = ["#28a745", "#ffc107"];

  return (
    <div className="card p-3 mt-4">
      <h5>Task Overview</h5>

      <div style={{ height: "250px" }}>
        <ResponsiveContainer>
          <PieChart>
            <Pie data={data} dataKey="value" label>
              {data.map((_, i) => (
                <Cell key={i} fill={COLORS[i]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default Charts;
