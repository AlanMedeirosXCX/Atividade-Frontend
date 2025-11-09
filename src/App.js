import React, { useState, useEffect } from 'react';

function App() {
  const [catImage, setCatImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchCatImage = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('https://api.thecatapi.com/v1/images/search');
      if (!response.ok) {
        throw new Error('Erro ao buscar a imagem');
      }
      const data = await response.json();
      setCatImage(data[0]);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCatImage();
  }, []);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Dominação mundial dos gatos</h1>

      {loading && <p>Carregando imagem...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {catImage && (
        <div>
          <img
            src={catImage.url}
            alt="Gato fofo"
            width={catImage.width / 3}
            height={catImage.height / 3}
            style={{ borderRadius: '10px', marginTop: '10px' }}
          />
        </div>
      )}

      <button
        onClick={fetchCatImage}
        style={{
          marginTop: '20px',
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Próxima imagem 
      </button>
    </div>
  );
}

export default App;