import classes from './Profile.module.css';

const Profile = ({ username, tag, location, avatar, stats }) => {
  const statsList = [];
  for (const stat in stats) {
    statsList.push({ label: stat, quantity: stats[stat] });
  }

  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="User avatar" className="avatar" />
        <p className="name">{username}</p>
        <p className="tag">{tag}</p>
        <p className="location">{location}</p>
      </div>

      <ul className="stats">
        {statsList &&
          statsList.map(({ label, quantity }) => (
            <li key={label}>
              <span className="label">{label}</span>
              <span className="quantity">{quantity}</span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Profile;
