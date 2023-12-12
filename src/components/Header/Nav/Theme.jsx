import { useEffect, useState } from "react";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const Theme = () => {
  const [darkMode, setDarkMode] = useState(true);
  const handleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    document.body.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div>
      <button
      
        onClick={handleDarkMode}
        className="bg-gray-200 dark:bg-gray-600 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm "
      >
        {darkMode? <MdLightMode size={32}/>
         :  <MdDarkMode size={32}/>}
       
      </button>
    </div>
  );
};

export default Theme;
