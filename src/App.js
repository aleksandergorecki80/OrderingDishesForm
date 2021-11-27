import './App.css';

// Redux
import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">Form</div>
    </Provider>
  );
}

export default App;
