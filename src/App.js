import { useState } from "react";
import nonMeaningfulWords from "./nonMeanings";

// Main App
function App() {
  const [items, setItems] = useState([]);

  // adding an items
  function handleItems(item) {
    setItems((items) => [...items, item]);
  }

  //deleting items
  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  return (
    <div className="app">
      <Logo />
      {/* props */}
      <Form onAddItems={handleItems} />
      {/* props */}
      <Packinglist items={items} onDeleteItems={handleDeleteItem} /> <Stats />
    </div>
  );
}

// Header
function Logo() {
  return <h1>✈️Far Away👜</h1>;
}

//  Form
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // regex for ! accepting numbers
    const alphabeticRegex = /^[A-Za-z\s]+$/;

    // non meaningful words array

    const cleanedDescription = description.trim(); // its constant

    // function to include non-meaningfull words
    function isNonMeaningfulWord(word) {
      const cleanedWord = word.trim().toLowerCase();
      const lowercaseWord = cleanedWord;
      const uppercaseWord =
        cleanedWord.charAt(0).toUpperCase() + cleanedWord.slice(1);
      return (
        nonMeaningfulWords.includes(lowercaseWord) ||
        nonMeaningfulWords.includes(uppercaseWord)
      );
    }

    // check for at least three characters
    function isValidWordLength(word) {
      return word.length >= 3;
    }

    // its function
    if (!isValidWordLength(cleanedDescription)) {
      return alert(
        "Please include a valid travel item with at least 3 characters."
      );
    }

    //checks for numbers
    if (!description || !alphabeticRegex.test(description)) {
      return alert("Please include a valid item description.");
    }

    // check if input is empty
    if (!description) return alert("Please include a item.");

    // adding an item
    const newItem = { description, quantity, packed: false, id: Date.now() };
    setDescription(""); // set to initial state
    setQuantity(1); // set to initial state

    // checks for non-meaningful words from its array
    if (!cleanedDescription || isNonMeaningfulWord(cleanedDescription)) {
      return alert(
        `Seriously, "${newItem.description}" ? Please include a valid travel item.`
      );
    }
    onAddItems(newItem);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 😄</h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

// Current List
function Packinglist({ items, onDeleteItems }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item item={item} onDeleteItems={onDeleteItems} key={item.id} /> //passing function props from parent
        ))}
      </ul>
    </div>
  );
}

// List Item
function Item({ item, onDeleteItems }) {
  return (
    <li>
      <input type="checkbox" value={item.packed} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        <span className="quantity">{item.quantity}</span>
        {item.description}
      </span>
      <button onClick={() => onDeleteItems(item.id)}>❌</button>
    </li>
  );
}

// Footer
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items in your list, you packed X</em>
    </footer>
  );
}

export default App;
