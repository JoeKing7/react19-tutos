import { use } from 'react';
import { UserContext } from '../context/user';

export default function UseContextExample() {
  const { name, isLogged, updateUser } = use(UserContext);

  return (
    <div>
      <h2>UseContext Example</h2>
      <p>
        {isLogged
          ? `Welcome back, ${name}!`
          : 'You are not logged in. Please log in.'}
      </p>

      {isLogged ? (
        <button onClick={() => updateUser({ name: '', isLogged: false })}>
          Log Out
        </button>
      ) : (
        <button
          onClick={() => updateUser({ name: 'John Doe', isLogged: true })}
        >
          Log In
        </button>
      )}
    </div>
  );
}
