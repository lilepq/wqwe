import './App.css'
import Header from "./Header.jsx";

function App() {
  return (
    <div>
      <Header />
      <main>
        <h1>Админ-панель</h1>
        <button>Каталог</button>
        <button>Добавить товар</button>
      </main>
    </div>
  );
}

export default App;
