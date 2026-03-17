import { useNavigate } from "react-router-dom";
import ProductCard from "../ProductCard";
import Card from "../components/Сard";
import styles from "./Catolog.module.css"

function CatalogPage() {
  const navigate = useNavigate();


  return (
    <main className="catalog-page">
      <div className={styles["catalog-container"]}>
        <button
          className={styles.back}
          onClick={() => navigate("/Admin")}
          type="button"
        >
          Вернуться назад
        </button>

        <h1 className={styles["catalog-title"]}>Каталог товаров</h1>
        <div className="catalog-page__grid">
          <Card id="21312" name="wqeqw" />
          <Card id="21312" name="wqeqw" />
          <Card id="21312" name="wqeqw" />
          <Card id="21312" name="wqeqw" />
          <Card id="21312" name="wqeqw" />
          <Card id="21312" name="wqeqw" />
          <Card id="21312" name="wqeqw" />
          <Card id="21312" name="wqeqw" />
          <Card id="21312" name="wqeqw" />
          <Card id="21312" name="wqeqw" />
          <Card id="21312" name="wqeqw" />
          <Card id="21312" name="wqeqw" />
        </div>
      </div>
    </main>
  );
}

export default CatalogPage;