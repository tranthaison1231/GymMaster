import Navbar from "@/scenes/navbar/";
import { useEffect, useState } from "react";
import { SelectedPage } from "./shared/types";
import Home from "@/scenes/home/";
import Benefits from "./scenes/benefits";
import OurClasses from "./scenes/ourclasses/";
import ContactUs from "./scenes/contactus/ContactUs";
import Footer from "@/scenes/footer";
import productApi from "./api/productApi";
import axiosClient from "./api/axiosClient";
function App() {
  // const [productList, setProductList] = useState([]);
  // useEffect(() => {
  //   const fetchProductList = async () => {
  //     try {
  //       const params = {
  //         _page: 1,
  //         _limit: 10,
  //       };

  //       const response = await productApi.getAll(params);
  //       console.log(response);
  //       setProductList(response.data);   
  //     } catch (error) {
  //       console.log("Failed to fetch product list: ", error);
  //     }
  //   };

  //   fetchProductList();
  // }, []);

   
    

  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  ); // you wanna explicit the type of useState
  const [isTopOfPage, setIsTopOfPage] = useState(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) {
        setIsTopOfPage(false);
        setSelectedPage(SelectedPage.Home);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="app bg-gray-20">
      {/* COMPONENTS HERE */}
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  );
}

export default App;
