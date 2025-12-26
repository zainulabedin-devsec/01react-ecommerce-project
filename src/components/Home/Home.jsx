import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Banner from "../Banner/Banner";
import Product from "../Products/Product";
import Cart from "../Cart/Cart";
import WishList from "../WishList/WishList";
import { IoMdHeartEmpty } from "react-icons/io";
import OrderSummary from "../OrderSummary/OrderSummary";
import PlacedOrder from "../PlacedOrder/PlacedOrder";
import Footer from "../Footer/Footer";
import AuthModal from "../AuthModal/AuthModal";
import Contact from "../Contact/Contact";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";

function Home() {
  const [searchProducts, setSearchProducts] = useState("");
  const [navShadow, setNavShadow] = useState(false);
  const [showCartWish, setShowCartWish] = useState(null);
  const [cart, setCart] = useState(() => {
    const storage = localStorage.getItem("cart");
    return storage ? JSON.parse(storage) : [];
  });
  const [orderSummary, setOrderSummary] = useState(false);
  const [finalOrder, setFinalOrder] = useState(false);
  const [wishList, setWishList] = useState(() => {
    const wishStorage = localStorage.getItem("wishList");
    return wishStorage ? JSON.parse(wishStorage) : [];
  });

  // scrolling to products by focusing on search bar
  const ScrollToProducts = () => {
    const scroll = document.getElementById("scroll-to-products");
    if (scroll) {
      scroll.scrollIntoView({ behavior: "smooth" });
    }
  };

  //providing shadow to navbar
  useEffect(() => {
    const shadow = () => {
      setNavShadow(window.scrollY > 10);
    };
    window.addEventListener("scroll", shadow);
    return () => {
      window.removeEventListener("scroll", shadow);
    };
  }, []);

  // show card and wish list
  const show = (tab) => {
    setShowCartWish((prev) => (prev === tab ? null : tab));
  };

  // hide wish list and cart
  const hide = () => {
    setShowCartWish(null);
  };

  // adding products to cart
  const addToCart = (product) => {
    const addedBefore = cart.find((item) => item.id === product.id);
    if (!addedBefore) {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // deleting items from cart
  const deleteCart = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  // increasing quantity of product in the cart
  const increaseQuantity = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // decrease quantity of product in the cart
  const decreaseQuantity = (product) => {
    setCart(
      cart.map((item) =>
        item.id === product.id && item.quantity > 0
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  // subtotal of cart products
  const subTotal = cart.reduce(
    (acc, item) => acc + item.quantity * item.price,
    0
  );

  // showing total items in navbar
  const totalItemsInCart = cart.reduce((acc, item) => acc + item.quantity, 0);

  // calculating shipping fee
  const shipping = totalItemsInCart * 3;

  // calculating total of my order
  const orderTotal = shipping + subTotal;

  // showing order details and hiding order summary
  const handleOrder = () => {
    setOrderSummary(false);
    setFinalOrder(true);
    setCart([]); // hide cart when order is placed
  };

  // adding items in wish list
  const addToWishList = (product) => {
    const addedBefore = wishList.find((item) => item.id === product.id);
    if (addedBefore) {
      alert("This item is already added in the cart");
      return;
    }
    const addDate = new Date().toLocaleDateString("en-GB");
    setWishList([...wishList, { ...product, addDate }]);
  };

  // clearing wishlist
  const clearWish = () => {
    setWishList([]);
  };

  // adding product in local storage
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("wishList", JSON.stringify(wishList));
  }, [wishList]);

  // login and signin
  const [showAuth, setShowAuth] = useState(false);
  const [authMode, setAuthMode] = useState("login");

  // contact form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully 🚀");
    setFormData({ name: "", email: "", message: "" });
  };

  // why choose us section
  const [clickedFeature, setClickedFeature] = useState(null);

  const handleFeatureClick = (featureTitle) => {
    setClickedFeature(featureTitle);
    console.log(`User clicked: ${featureTitle}`);
  };

  return (
    <div className="relative">
      <WishList
        showCartWish={showCartWish}
        hide={hide}
        addToCart={addToCart}
        wishList={wishList}
        clearWish={clearWish}
      />
      <Cart
        showCartWish={showCartWish}
        hide={hide}
        cart={cart}
        deleteCart={deleteCart}
        increaseQuantity={increaseQuantity}
        decreaseQuantity={decreaseQuantity}
        subTotal={subTotal}
        shipping={shipping}
        orderTotal={orderTotal}
        setOrderSummary={setOrderSummary}
      />
      <Navbar
        ScrollToProducts={ScrollToProducts}
        setSearchProducts={setSearchProducts}
        navShadow={navShadow}
        show={show}
        totalItemsInCart={totalItemsInCart}
        wishList={wishList}
        setShowAuth={setShowAuth}
        setAuthMode={setAuthMode}
      />
      <Banner />
      <Product
        searchProducts={searchProducts}
        addToCart={addToCart}
        addToWishList={addToWishList}
        wishList={wishList}
        cart={cart}
      />

      <div className="w-full h-1  bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-pulse"></div>
      <WhyChooseUs
        handleFeatureClick={handleFeatureClick}
        clickedFeature={clickedFeature}
      />

      <div className="w-full h-1  bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-pulse"></div>

      <Contact
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      <div className="w-full h-1  bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-pulse"></div>

      {orderSummary && (
        <OrderSummary
          cart={cart}
          subTotal={subTotal}
          shipping={shipping}
          orderTotal={orderTotal}
          setOrderSummary={setOrderSummary}
          handleOrder={handleOrder}
          setShowCartWish={setShowCartWish}
        />
      )}

      {finalOrder && <PlacedOrder setFinalOrder={setFinalOrder} />}
      <Footer />
      {showAuth && (
        <AuthModal
          setShowAuth={setShowAuth}
          authMode={authMode}
          setAuthMode={setAuthMode}
        />
      )}
    </div>
  );
}

export default Home;
