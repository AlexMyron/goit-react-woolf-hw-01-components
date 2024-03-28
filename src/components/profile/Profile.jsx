import classes from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={classes.profile}>
      <div className={classes.description}>
        <img src={avatar} alt="User avatar" className={classes.avatar} />
        <p className={classes.name}>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      {!!stats?.length ? (
        <ul className={classes.stats}>
          {Object.entries(stats).map(([label, quantity]) => (
            <li key={label}>
              <span className={classes.label}>{label}</span>
              <span className={classes.quantity}>{quantity}</span>
            </li>
          ))}
        </ul>
      ) : (
        <p className={classes.warn}>No stats has been found...</p>
      )}
    </div>
  );
};

export default Profile;
