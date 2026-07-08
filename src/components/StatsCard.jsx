function StatsCard({ icon, title, value, description }) {
  return (
    <div className="stats-card">
      <div className="stats-icon">
        {icon}
      </div>

      <div>
        <h3>{value}</h3>
        <p>{title}</p>
        <small>{description}</small>
      </div>
    </div>
  );
}

export default StatsCard;