import { useNavigate } from "react-router-dom";

function AdminPage() {
  const navigate = useNavigate();

  return (
    <div style={{ padding: "40px" }}>
      <h1>Админ-панель</h1>

      <button onClick={() => navigate("/catalog")}>
        Каталог
      </button>

      <button
        onClick={() => navigate("/add-product")}
        style={{ marginLeft: "20px" }}
      >
        Добавить товар
      </button>
    </div>
  );
}

export default AdminPage;