import classes from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const statsList = [];
  for (const stat in stats) {
    statsList.push({ label: stat, quantity: stats[stat] });
  }

  return (
    <div className={classes.profile}>
      <div className={classes.description}>
        <img src={avatar} alt="User avatar" className={classes.avatar} />
        <p className={classes.name}>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={classes.stats}>
        {statsList &&
          statsList.map(({ label, quantity }) => (
            <li key={label}>
              <span className={classes.label}>{label}</span>
              <span className={classes.quantity}>{quantity}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Profile;
