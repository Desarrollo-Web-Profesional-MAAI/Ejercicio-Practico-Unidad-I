import { useState } from 'react';

function InteractiveButton() {
  const [texto, setTexto] = useState('Haz clic aquí');

  const handleClick = () => {
    setTexto('¡Me clickeaste! 🎉');
  };

  return (
    <button 
      onClick={handleClick}
      style={{
        padding: '10px 20px',
        fontSize: '16px',
        cursor: 'pointer',
        backgroundColor: '#007bff',
        color: 'white',
        border: 'none',
        borderRadius: '5px'
      }}
    >
      {texto}
    </button>
  );
}

export default InteractiveButton;