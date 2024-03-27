import FriendListItem from '../friends-list-item/FriendListItem';

import classes from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={classes['friend-list']}>
      {friends &&
        friends.map(({ avatar, name, isOnline, id }) => (
          <FriendListItem
            key={id}
            avatar={avatar}
            name={name}
            isOnline={isOnline}
          />
        ))}
    </ul>
  );
};

export default FriendList;
