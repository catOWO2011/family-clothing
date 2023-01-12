import { Fragment, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import ProductCard from "../../components/product-car/product-card.component";
import Spinner from "../../components/spinner/spinner.component";

import { selectCategories, selectCategoriesIsLoading } from "../../store/category/category.selector";

import "./category.styles.scss";

const Category = () => {
  const { category } = useParams();
  const categories = useSelector(selectCategories);
  const isLoading = useSelector(selectCategoriesIsLoading);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(categories[category]);
  }, [category, categories]);

  return (
    <Fragment>
      <h2 className="category-title">{category.toUpperCase()}</h2>
      {
        isLoading ?
        (<Spinner />)
        :
        (
          <div className="category-container">
            {products &&
              products.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
          </div>
        )
      }
    </Fragment>
  );
};

export default Category;
