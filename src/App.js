import Header from './components/Header/Header';
import Tasks from './components/Tasks/Tasks';

// App component that renders the Header and Tasks components
function App() {
  return (
    <>
      {/* render the Header component */}
      <Header />
      {/* render the Tasks component */}
      <Tasks />
    </>
  );
}

export default App;
