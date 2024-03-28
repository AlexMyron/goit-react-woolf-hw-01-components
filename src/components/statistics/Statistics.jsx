import classes from './Statistics.module.css';

const Statistics = ({ stats, title }) => {
  const colors = ['#54c7ec', '#b854ec', '#ffba0e', '#fa38ee', '#00a400'];
  const defineColor = idx => {
    return colors[idx % colors.length];
  };

  return (
    <section className={classes.statistics}>
      {title && <h2 className={classes.title}>{title}</h2>}

      {!!stats?.length && (
        <ul className={classes.stat}>
          {stats.map(({ id, label, percentage }, idx) => (
            <li
              className={classes.item}
              key={id}
              style={{ backgroundColor: defineColor(idx) }}
            >
              <span className={classes.label}>{label}</span>
              <span className={classes.percentage}>{percentage}</span>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Statistics;
