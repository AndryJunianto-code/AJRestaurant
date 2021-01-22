import React, { useEffect, useContext, useState } from "react";
import Client from "./Contentful";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [foods, setFoods] = useState([]);
  const [popularFoods, setPopularFoods] = useState([]);
  const [sortedFoods, setSortedFoods] = useState([]);

  const [type, setType] = useState("all");
  const [price, setPrice] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [calories, setCalories] = useState(0);
  const [minCalories, setMinCalories] = useState(0);
  const [maxCalories, setMaxCalories] = useState(0);
  const [vegetarian, setVegetarian] = useState(false);
  const [halal, setHalal] = useState(false);
  const [searchName, setSearchName] = useState("");

  const [cart, setCart] = useState([]);
  const [cartSubtotal, setCartSubtotal] = useState(0);
  const [cartTax, setCartTax] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);
  const [totalItem, setTotalItem] = useState(0);

  const [loggedIn, setLoggedIn] = useState(false);
  const [userInfo, setUserInfo] = useState("");

  const getItem = (id) => {
    const product = foods.find((item) => item.id === id);
    return product;
  };

  const addOrder = (id) => {
    const tempFood = [...foods];
    const index = tempFood.indexOf(getItem(id));
    const selectedFood = tempFood[index];
    setCart([...cart, selectedFood]);
    selectedFood.quantity = 1;
    selectedFood.total = selectedFood.quantity * selectedFood.price;
  };

  const increment = (id) => {
    const tempCart = [...cart];
    const selectedFood = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedFood);
    const food = tempCart[index];

    food.quantity += 1;
    food.total = food.quantity * food.price;
    setCart([...tempCart]);
  };

  const decrement = (id) => {
    const tempCart = [...cart];
    const selectedFood = tempCart.find((item) => item.id === id);
    const index = tempCart.indexOf(selectedFood);
    const food = tempCart[index];

    food.quantity -= 1;
    if (food.quantity <= 0) {
      food.quantity = 0;
    }
    food.total = food.quantity * food.price;
    setCart([...tempCart]);
  };

  const manageCartPricing = () => {
    let subtotal = 0;
    let totalItem = 0;
    cart.map((cart) => {
      subtotal += cart.total;
      totalItem += cart.quantity;
    });
    const tax = parseFloat((subtotal * 0.048).toFixed(2));
    const totalPrice = subtotal + tax;
    setCartTax(tax);
    setCartSubtotal(subtotal);
    setCartTotalPrice(totalPrice);
    setTotalItem(totalItem);
  };

  useEffect(() => {
    manageCartPricing();
  }, [increment, decrement]);

  const clearCart = () => {
    setCart([]);
  };

  const formatData = (items) => {
    let tempItems = items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);
      let food = { ...item.fields, images, id };
      return food;
    });
    return tempItems;
  };

  const getFoodLink = (link) => {
    const tempFood = [...foods];
    const singleFood = tempFood.find((food) => food.link === link);
    return singleFood;
  };

  const handleChange = (e) => {
    const target = e.target.name;
    const value = e.target.value;
    if (target === "type") {
      setType(value);
    }

    if (target === "price") {
      setPrice(value);
    }
    if (target === "calories") {
      setCalories(value);
    }
    if (target === "vegetarian") {
      setVegetarian(!vegetarian);
    }
    if (target === "halal") {
      setHalal(!halal);
    }
    if (target === "search-name") {
      setSearchName(value);
    }
  };

  const filterFood = () => {
    let tempFoods = foods;
    /* TYPES */
    if (type !== "all") {
      tempFoods = tempFoods.filter((food) => food.type === type);
    }
    /* VEGETARIAN */
    if (vegetarian) {
      tempFoods = tempFoods.filter((food) => food.vegetarian === true);
    }
    /* HALAL */
    if (halal) {
      tempFoods = tempFoods.filter((food) => food.halal === true);
    }
    /* SEARCH NAME */
    if (searchName !== "") {
      tempFoods = tempFoods.filter((food) =>
        food["name"].toUpperCase().includes(searchName.toUpperCase())
      );
    }
    /* PRICE */
    tempFoods = tempFoods.filter((food) => food.price <= price);
    /* CALORIES */
    tempFoods = tempFoods.filter((food) => food.calories <= calories);
    setSortedFoods(tempFoods);
  };

  useEffect(() => {
    filterFood();
  }, [type, price, calories, vegetarian, halal, searchName]);

  const getData = async () => {
    setLoading(true);
    try {
      const response = await Client.getEntries({
        content_type: "aJrestaurant",
        order: "sys.createdAt",
      });
      let foods = formatData(response.items);
      let popularFoods = foods.filter((food) => food.popular === true);
      let maxPrice = Math.max(...foods.map((food) => food.price));
      let minPrice = Math.min(...foods.map((food) => food.price));
      let maxCalories = Math.max(...foods.map((food) => food.calories));
      let minCalories = Math.min(...foods.map((food) => food.calories));
      setFoods(foods);
      setPrice(maxPrice);
      setMaxPrice(maxPrice);
      setMinPrice(minPrice);
      setCalories(maxCalories);
      setMinCalories(minCalories);
      setMaxCalories(maxCalories);
      setPopularFoods(popularFoods);
      setSortedFoods(foods);

      setLoading(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <AppContext.Provider
      value={{
        popularFoods,
        foods,
        getFoodLink,
        sortedFoods,
        loading,
        handleChange,
        maxPrice,
        price,
        minPrice,
        calories,
        minCalories,
        maxCalories,
        vegetarian,
        halal,
        searchName,
        addOrder,
        cart,
        clearCart,
        increment,
        decrement,
        cartTax,
        cartSubtotal,
        cartTotalPrice,
        totalItem,
        loggedIn,
        setLoggedIn,
        setUserInfo,
        userInfo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
