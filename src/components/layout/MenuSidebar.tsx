import React from "react";

const MenuSidebar = () => {
  const categories = [
    { name: "Sách tiếng Việt", image: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786040337986.jpg" },
    { name: "English Books", image: "https://m.media-amazon.com/images/I/61DlxMnmmmL.jpg" },
    { name: "Sách giáo khoa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLOTvDHIg3XHgiV1_v2zZIJ4BNJYQlRIl2g&s" },
    { name: "Sách thiếu nhi", image: "https://www.nxbtre.com.vn/Images/Editor/images/nxbtre_full_01572018_125708.jpg" },
    { name: "Sách học Ngoại ngữ", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1505219499i/36227305.jpg" },
    { name: "Sách tiếng Việt", image: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786040337986.jpg" },
    { name: "English Books", image: "https://m.media-amazon.com/images/I/61DlxMnmmmL.jpg" },
    { name: "Sách giáo khoa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLOTvDHIg3XHgiV1_v2zZIJ4BNJYQlRIl2g&s" },
    { name: "Sách thiếu nhi", image: "https://www.nxbtre.com.vn/Images/Editor/images/nxbtre_full_01572018_125708.jpg" },
    { name: "Sách học Ngoại ngữ", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1505219499i/36227305.jpg" },
    { name: "Sách tiếng Việt", image: "https://cdn0.fahasa.com/media/catalog/product/9/7/9786040337986.jpg" },
    { name: "English Books", image: "https://m.media-amazon.com/images/I/61DlxMnmmmL.jpg" },
    { name: "Sách giáo khoa", image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvLOTvDHIg3XHgiV1_v2zZIJ4BNJYQlRIl2g&s" },
    { name: "Sách thiếu nhi", image: "https://www.nxbtre.com.vn/Images/Editor/images/nxbtre_full_01572018_125708.jpg" },
    { name: "Sách học Ngoại ngữ", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1505219499i/36227305.jpg" },
  ];

  const menuItems = categories.map((category, index) => (
    <li
      key={index}
      className="flex items-center space-x-2 text-sm text-gray-700 hover:text-blue-600 cursor-pointer"
    >
      <img
        src={category.image}
        alt={category.name}
        className="w-6 h-6 object-cover"
      />
      <span>{category.name}</span>
    </li>
  ));

  return (
    <div className="w-50 bg-white p-6 ml-3 overflow-y-auto rounded-xl">
      <h2 className="text-xm font-bold mb-4">Danh mục</h2>
      <ul className="space-y-7">{menuItems}</ul>
    </div>
  );
};

export default MenuSidebar;
