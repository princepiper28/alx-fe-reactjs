import HomePage from './components/HomePage';

function App() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="flex justify-center items-center p-6">
        <h1 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Welcome to Recipe Sharing Platform!
        </h1>
      </div>
      <HomePage />
    </div>
  );
}

export default App;
