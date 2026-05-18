import axios from "axios";

const BASE_URL = "https://www.themealdb.com/api/json/v1/1";

export const fetchRecipes = async () => {
  const response = await axios.get(
    `${BASE_URL}/search.php?s=`
  );
  return response.data.meals;
};

export const searchRecipes = async (query) => {
  const response = await axios.get(
    `${BASE_URL}/search.php?s=${query}`
  );
  return response.data.meals;
};

export const fetchRecipeById = async (id) => {
  const response = await axios.get(
    `${BASE_URL}/lookup.php?i=${id}`
  );
  return response.data.meals[0];
};

export const fetchCategories = async () => {
  const response = await axios.get(
    `${BASE_URL}/categories.php`
  );
  return response.data.categories;
};

export const filterByCategory = async (category) => {
  const response = await axios.get(
    `${BASE_URL}/filter.php?c=${category}`
  );
  return response.data.meals;
};