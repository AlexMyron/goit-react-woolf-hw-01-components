import Profile from './profile/Profile';
import Statistics from './statistics/Statistics';
import FriendList from './firends-list/FriendList';
import TransactionsHistory from './transactions/TransactionsHistory';

import userData from '../store/user.json';
import statsData from '../store/stats.json';
import friendsData from '../store/friends-list.json';
import transactionData from '../store/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        gap: '120px',
        padding: '120px 0',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={userData.username}
        tag={userData.tag}
        location={userData.location}
        avatar={userData.avatar}
        stats={userData.stats}
      />

      <Statistics title="Upload stats" stats={statsData} />

      {!!friendsData?.length && <FriendList friends={friendsData} />}

      {!!transactionData?.length && (
        <TransactionsHistory items={transactionData} />
      )}
    </div>
  );
};
