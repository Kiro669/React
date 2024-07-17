// src/components/Modal.js
import React, { useState } from 'react';

const Modal = ({ show, onClose }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: '',
    image: '',
    video: '',
    description: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  const handleClear = () => {
    setFormData({
      title: '',
      category: '',
      image: '',
      video: '',
      description: ''
    });
  };

  if (!show) return null;

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Editar Card</h2>
        <button onClick={onClose}>Cerrar</button>
        <form onSubmit={handleSubmit}>
          <input name="title" value={formData.title} onChange={handleChange} placeholder="Título" />
          <select name="category" value={formData.category} onChange={handleChange}>
            <option value="">Selecciona Categoría</option>
            <option value="cat1">Categoría 1</option>
            <option value="cat2">Categoría 2</option>
          </select>
          <input name="image" value={formData.image} onChange={handleChange} placeholder="Imagen" />
          <input name="video" value={formData.video} onChange={handleChange} placeholder="Video" />
          <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Descripción"></textarea>
          <button type="submit">Guardar</button>
          <button type="button" onClick={handleClear}>Limpiar</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
