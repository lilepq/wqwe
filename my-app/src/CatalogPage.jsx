import { useNavigate } from "react-router-dom";
import ProductCard from "./ProductCard";

function CatalogPage() {
  const navigate = useNavigate();

  const products = [
    {
      id: 1,
      title: "Название товара",
      article: "Артикул",
      image: "https://via.placeholder.com/400x400/a0b2bb/a0b2bb",
    },
    {
      id: 2,
      title: "Название товара",
      article: "Артикул",
      image: "https://via.placeholder.com/400x400/a0b2bb/a0b2bb",
    },
    {
      id: 3,
      title: "Название товара",
      article: "Артикул",
      image: "https://via.placeholder.com/400x400/a0b2bb/a0b2bb",
    },
    {
      id: 4,
      title: "Название товара",
      article: "Артикул",
      image: "https://via.placeholder.com/400x400/a0b2bb/a0b2bb",
    },
    {
      id: 5,
      title: "Название товара",
      article: "Артикул",
      image: "https://via.placeholder.com/400x400/a0b2bb/a0b2bb",
    },
    {
      id: 6,
      title: "Название товара",
      article: "Артикул",
      image: "https://via.placeholder.com/400x400/a0b2bb/a0b2bb",
    },
    {
      id: 7,
      title: "Название товара",
      article: "Артикул",
      image: "https://via.placeholder.com/400x400/a0b2bb/a0b2bb",
    },
    {
      id: 8,
      title: "Название товара",
      article: "Артикул",
      image: "https://via.placeholder.com/400x400/a0b2bb/a0b2bb",
    },
  ];

  return (
    <main className="catalog-page">
      <div className="catalog-page__container">
        <button
          className="catalog-page__back"
          onClick={() => navigate("/")}
          type="button"
        >
          Вернуться назад
        </button>

        <h1 className="catalog-page__title">Каталог товаров</h1>

        <div className="catalog-page__grid">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              title={product.title}
              article={product.article}
              image={product.image}
            />
          ))}
        </div>
      </div>
    </main>
  );
}

export default CatalogPage;