import { useState } from 'react';

export function NavigationMenu({ items }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="flex space-x-4">
      {items.map((item, index) => (
        <button
          key={item.url}
          className={`${
            index === activeIndex ? 'text-white bg-blue-600' : 'text-gray-700'
          } flex items-center space-x-2 px-4 py-2 rounded`}
          onClick={() => setActiveIndex(index)}
        >
          {item.icon}
          <span>{item.name}</span>
        </button>
      ))}
    </div>
  );
}
