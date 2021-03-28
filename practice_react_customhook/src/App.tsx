import { UserCard } from './components/UserCard';
import { useAllUser } from './hooks/useAllUser';

function App() {
  const {getUsers, userProfile, loading, error} = useAllUser();
  const onClickFetchData = () => getUsers();
  return (
    <div>
      <button onClick={onClickFetchData}>データ取得</button><br />
      {error ? (
        <p style={{color: 'red'}}>データの取得に失敗しました</p>
  ) : loading ? (
        <p>Loading...</p>
        ) : (
            <>
              {userProfile.map((user) => (
                <UserCard key={user.id} user={user} />
              ))}
            </>
      )}
    </div>
  )
}

export default App;
