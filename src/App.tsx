import './App.css';
import Router from './shared/router/Router';
import Route from './shared/router/Route';
import Root from './pages/Root';
import About from './pages/About';

function App() {
  return (
    <Router>
      <Route path="/" component={<Root />} />
      <Route path="/about" component={<About />} />
    </Router>
  );
}

export default App;
