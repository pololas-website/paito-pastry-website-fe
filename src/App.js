import Router from './router/Router';
import UserProvider from './context/userContext';

function App() {
  return (
    <UserProvider>
      <Router />
    </UserProvider>
  );
}

export default App;
