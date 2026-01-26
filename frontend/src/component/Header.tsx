import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router";
import logo from "@/assets/DIMPL_Logo_Long_SVG.svg";

const Header: React.FC = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(new Date());
  const url = useLocation();
  const path = url.pathname;
  // console.log(path)
  // useMemo(() => {
  //   path = url.pathname
  //   console.log(path)
  // }, [url.pathname])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const formatDate = (date: Date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "2-digit",
    });
  };

  return (
    // <header className="fixed h-24 top-0 left-0 w-full bg-white  shadow-sm border-b border-gray-200 dark:border-gray-700 px-6 py-4 z-50">
    // <header className="fixed h-24 top-0 left-0 w-full bg-white  shadow-sm border-b border-gray-200 dark:border-gray-700 z-50">
    //   <div className="flex items-center justify-between">
    //     <div className="flex items-center space-x-4">
    //       <span className="text-white font-bold text-xl cursor-pointer">
    //         <img
    //           src={logo}
    //           alt="Logo"
    //           className="w-40 h-24 object-contain cursor-pointer"
    //           onClick={() => navigate("/")}
    //         />
    //       </span>
    //       {/* <div>
    //         <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
    //           Durga Infra Mining Pvt Ltd
    //         </h1>
    //       </div> */}
    //     </div>
    //   </div>
    // </header>

    <header className="fixed top-0 left-0 w-full h-24 bg-white shadow-sm border-b border-gray-200 z-50">
      <div className="flex items-center h-full pl-4 py-2">
        <img
          src={logo}
          alt="Logo"
          className="h-full max-h-16 w-auto cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>
    </header>
  );
};

export default Header;
