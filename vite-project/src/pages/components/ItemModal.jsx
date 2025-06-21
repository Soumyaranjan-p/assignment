import React from 'react';

function ItemModal({ item, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded w-full max-w-lg relative">
        <button onClick={onClose} className="absolute top-2 right-2 text-xl">&times;</button>
        <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
        <p className="mb-2 text-gray-700">{item.desc}</p>
        <div className="flex overflow-x-auto space-x-2 mb-4">
          {[item.cover, ...(item.images || [])].map((img, i) => (
            <img key={i} src={img} alt="" className="h-32 w-32 object-cover rounded" />
          ))}
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Enquire</button>
      </div>
    </div>
  );
}

export default ItemModal;