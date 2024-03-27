import classes from './Statistics.module.css';

const Statistics = ({ stats, title }) => {
  const colors = ['#54c7ec', '#b854ec', '#ffba0e', '#fa38ee', '#00a400'];

  return (
    <section className={classes.statistics}>
      <h2 className={classes.title}>{title}</h2>

      <ul className={classes.stat}>
        {stats &&
          stats.map(({ id, label, percentage }, idx) => (
            
            <li className={classes.item} key={id} style={{backgroundColor: colors[idx]}}>
              <span className={classes.label}>{label}</span>
              <span className={classes.percentage}>{percentage}</span>
            </li>
          ))}
      </ul>
    </section>
  );
};

export default Statistics;
