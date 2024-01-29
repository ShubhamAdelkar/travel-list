const initialItems = [
  { id: 1, description: " Passports", quantity: 2, packed: false },
  { id: 2, description: " Socks", quantity: 12, packed: false },
  { id: 3, description: " Charger", quantity: 1, packed: true },
];

function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <Packinglist />
      <Stats />
    </div>
  );
}

function Logo() {
  return <h1>✈️ Travel List🧳</h1>;
}

function Form() {
  return (
    <form className="add-form">
      <h3>What do you need for your trip ? 😄</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input type="text" placeholder="item..." />
      <button>Add</button>
    </form>
  );
}

function Packinglist() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity}
        {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>You have X items in your list, you packed X</em>
    </footer>
  );
}

export default App;
