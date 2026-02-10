function TechList() {
  const tecnologias = [
    { id: 1, nombre: 'React' },
    { id: 2, nombre: 'JavaScript' },
    { id: 3, nombre: 'Node.js' },
    { id: 4, nombre: 'Docker' },
    { id: 5, nombre: 'Git' }
  ];

  return (
    <div>
      <h3>Tecnologías que estoy aprendiendo:</h3>
      <ul>
        {tecnologias.map((tech) => (
          <li key={tech.id}>{tech.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default TechList;