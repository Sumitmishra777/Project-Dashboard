import { motion } from "framer-motion";

function StatsCard({ title, value, color }) {
  return (
    <motion.div className="card p-3 shadow-sm" whileHover={{ scale: 1.05 }}>
      <h6 className="text-muted">{title}</h6>
      <h3 style={{ color }}>{value}</h3>
    </motion.div>
  );
}

export default StatsCard;
