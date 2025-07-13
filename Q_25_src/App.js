import UserCard from './UserCard';

function App() {
  return (
    <div>
      <UserCard name="Alice" email="alice@example.com" age={25} />
      <UserCard name="Bob" email="bob@example.com" age={30} />
      <UserCard name="Charlie" email="charlie@example.com" age={35} />
    </div>
  );
}
export default App;
