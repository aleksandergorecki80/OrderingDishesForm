import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import Order from './components/Order';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Order />
      </div>
    </Provider>
  );
}

export default App;
