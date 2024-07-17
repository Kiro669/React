// src/pages/NewVideo.js
import React, { useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';

const NewVideo = () => {
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/videos', formData);
      console.log('Video guardado:', response.data);
    } catch (error) {
      console.error('Error al guardar el video:', error);
    }
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

  return (
    <div>
      <Header />
      <main>
        <h1>Nuevo Video</h1>
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
      </main>
    </div>
  );
};

export default NewVideo;
