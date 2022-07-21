import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { getCategories } from "../../services";

const Categories = () => {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    // try to communicate with server API
    getCategories().then((newCategories) => setCategories(newCategories)).catch((err) => {
      if (err.name === 'AbortError') {
        console.log('Successfully aborted');
      } else {
        setError(err);
      }
    });

    return () => {
      controller.abort();
    }
  }, []);

  return (
    <div className="transition duration-500 dark:bg-gray-600 bg-white text-gray-700 dark:text-white shadow-lg rounded-lg p-8 lg:mb-8 mb-16 pb-12 tracking-wide">
      <h3 className="text-xl mb-8 border-b pb-4 tracking-wide">Categories</h3>
      {categories.map((category) => (
        <Link key={category.slug} href={`/category/${category.slug}`} passHref>
          <span className="cursor-pointer block pb-3 mb-3">
            {category.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
