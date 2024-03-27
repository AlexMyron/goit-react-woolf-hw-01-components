import classes from './FriendListItem.module.css';

const FriendListItem = ({ avatar, name, isOnline }) => {
  const statusClasses = `${classes.status} ${
    isOnline ? classes.online : classes.offline
  }`;

  return (
    <li className={classes.item}>
      <span className={statusClasses}></span>
      <img
        className={classes.avatar}
        src={avatar}
        alt="User avatar"
        width="48"
      />
      <p className={classes.name}>{name}</p>
    </li>
  );
};

export default FriendListItem;
