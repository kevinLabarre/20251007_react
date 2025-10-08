function List() {
  const users = [
    { id: 1, name: "John", age: 30, city: "New York" },
    { id: 2, name: "Jane", age: 25, city: "Los Angeles" },
    { id: 3, name: "Bob", age: 40, city: "Chicago" },
  ];

  const legumes = ["carottes", "oignons", "poivrons", "carottes"];

  return (
    <>
      <h1>Ma liste :</h1>

      {legumes.map((legume, index) => (
        <p key={index}>{legume}</p>
      ))}

      {users.map((user) => (
        <ul key={user.id}>
          <li>nom: {user.name}</li>
          <li>age: {user.age}</li>
          <li>ville: {user.city}</li>
        </ul>
      ))}

      {/* 
        <ul>
            <li>name</li>
            <li>age</li>
            <li>city</li>
        </ul>
         <ul>
            <li>name</li>
            <li>age</li>
            <li>city</li>
        </ul>

            ....

      */}
    </>
  );
}

export default List;
