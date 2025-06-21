import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { toast } from 'react-hot-toast';
function AddItem() {
  const [form, setForm] = useState({ name: '', type: '', desc: '', cover: '', images: [] });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'cover') {
      setForm({ ...form, cover: URL.createObjectURL(files[0]) });
    } else if (name === 'images') {
      setForm({ ...form, images: Array.from(files).map(file => URL.createObjectURL(file)) });
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const items = JSON.parse(localStorage.getItem('items') || '[]');
    localStorage.setItem('items', JSON.stringify([...items, form]));
    toast.success('Item successfully added');
    setForm({ name: '', type: '', desc: '', cover: '', images: [] });
  };

  return (
    
    <form onSubmit={handleSubmit} className="p-4 space-y-4">
      <input name="name"
       value={form.name} 
       onChange={handleChange}
        placeholder="Item Name"
         className="border p-2 w-full" 
         required />
      <input name="type" value={form.type} onChange={handleChange} placeholder="Item Type(Shirt,Pant,Shoes,sports,gear,etc.)" className="border p-2 w-full" required />
      <textarea name="desc" value={form.desc} onChange={handleChange} placeholder="Item Description" className="border p-2 w-full" required />
      <input type="file" name="cover" onChange={handleChange} className="border p-2 w-full" required />
      <input type="file" name="images" multiple onChange={handleChange} className="border p-2 w-full" />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded-md">Add Item</button>
      <Toaster position="top" />
    </form>
  );
}

export default AddItem;