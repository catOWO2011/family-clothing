import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Outlet } from "react-router-dom";

import { setCategories } from "../../store/category/category.action";
import { getCategoriesAndDocuments } from "../../utils/firebase/firebase.utils";

import "./shop.styles.scss";

const Shop = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const getCategories = async () => {
      const categories = await getCategoriesAndDocuments();
      dispatch(setCategories(categories));
    };

    getCategories();
  }, [dispatch]);

  return <Outlet />;
};

export default Shop;
