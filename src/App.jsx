import UserProfile from './components/UserProfile';
import TechList from './components/TechList';

function App() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>Desafío 1: Creación y Anidación</h2>
      <UserProfile />
      
      <hr style={{ margin: '30px 0' }} />
      
      <h2>Desafío 2: Renderizado de Listas</h2>
      <TechList />
    </div>
  );
}

export default App;