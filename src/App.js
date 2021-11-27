import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

// Components
import OrderForm from './components/OrderForm';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <OrderForm />
      </div>
    </Provider>
  );
}

export default App;
