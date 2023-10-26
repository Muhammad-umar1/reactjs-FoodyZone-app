import React, { useState } from 'react';

const PasteButton = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(null);

  const handleOptionClick = (value) => {
    setSelectedValue(value);
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative block font-segoe-ui">
      <button className="button" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
        {selectedValue || 'Select an option'}
      </button>
      {isDropdownOpen && (
        <div className="dropdown-content absolute z-10 min-w-200 bg-gray-900 border border-green-500 rounded-b-15 shadow-lg">
          <a
            href="#"
            className="text-green-500 block py-2 px-2 no-underline transition duration-100 hover:bg-green-500 hover:text-gray-900 focus:bg-gray-900 focus:text-green-500"
            onClick={() => handleOptionClick('Item 1')}
          >
            Item 1
          </a>
          <a
            href="#"
            className="text-green-500 block py-2 px-2 no-underline transition duration-100 hover:bg-green-500 hover:text-gray-900 focus:bg-gray-900 focus:text-green-500"
            onClick={() => handleOptionClick('Item 2')}
          >
            Item 2
          </a>
          {/* Add more items as needed */}
        </div>
      )}
    </div>
  );
};

export default PasteButton;
