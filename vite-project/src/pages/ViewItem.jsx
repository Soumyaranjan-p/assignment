import React, { useEffect, useState } from 'react';
import ItemModal from './components/ItemModal';

function ViewItems() {
  const [items, setItems] = useState([]);
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('items') || '[]');
    setItems(saved);
  }, []);

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-4">All Items</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {items.map((item, i) => (
          <div key={i} onClick={() => setSelected(item)} className="border p-4 rounded cursor-pointer">
            <img src={item.cover} alt={item.name} className="h-40 w-full object-cover mb-2" />
            <h3 className="font-bold">{item.name}</h3>
          </div>
        ))}
      </div>
      {selected && <ItemModal item={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

export default ViewItems;