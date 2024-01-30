import { useState } from "react";

// Intial item list
const initialItems = [
  { id: 1, description: " Passports", quantity: 2, packed: false },
  { id: 2, description: " Socks", quantity: 12, packed: false },
  { id: 3, description: " Charger", quantity: 1, packed: true },
];

// Main App
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

// Header
function Logo() {
  return <h1>✈️Far Away👜</h1>;
}

//  Form
function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    // regex for ! accepting numbers
    const alphabeticRegex = /^[A-Za-z\s]+$/;

    // non meaningful words array
    const nonMeaningfulWords = [
      "hello",
      "mad",
      "idiot",
      "hi",
      "hii",
      "justine",
      "bye",
      "goodbye",
      "thanks",
      "thank you",
      "good",
      "bad",
      "ok",
      "okay",
      "fine",
      "cool",
      "awesome",
      "no",
      "yes",
      "maybe",
      "sure",
      "yeah",
      "yup",
      "please",
      "sorry",
      "excuse me",
      "pardon",
      "alright",
      "nice",
      "great",
      "wonderful",
      "fantastic",
      "amazing",
      "beautiful",
      "good morning",
      "good afternoon",
      "good evening",
      "good night",
      "how are you",
      "what's up",
      "see you",
      "talk to you later",
      "take care",
      "have a nice day",
      "best regards",
      "sincerely",
      "morning",
      "afternoon",
      "evening",
      "night",
      "day",
      "week",
      "month",
      "year",
      "today",
      "tomorrow",
      "yesterday",
      "now",
      "later",
      "soon",
      "forever",
      "always",
      "never",
      "together",
      "apart",
      "here",
      "there",
      "everywhere",
      "anywhere",
      "nowhere",
      "up",
      "down",
      "left",
      "right",
      "north",
      "south",
      "east",
      "west",
      "far",
      "near",
      "farther",
      "nearer",
      "farthest",
      "nearest",
      "away",
      "back",
      "forward",
      "on",
      "off",
      "in",
      "out",
      "hello",
      "Hello",
      "over",
      "under",
      "above",
      "below",
      "through",
      "across",
      "between",
      "among",
      "within",
      "without",
      "beside",
      "beyond",
      "inside",
      "outside",
      "around",
      "about",
      "before",
      "after",
      "during",
      "while",
      "since",
      "until",
      "at",
      "by",
      "for",
      "with",
      "without",
      "about",
      "against",
      "instead",
      "besides",
      "Shubham",
      "shubham",
      "Vipul",
      "vipul",
      "Renuka",
      "renuka",
      "Chinmay",
      "chinmay",
      "Miraya",
      "miraya",
      "alex",
      "Alex",
      "javascript",
      "Javascript",
      "girl",
      "throughout",
      "along",
      "against",
    ];
    const cleanedDescription = description.trim(); // its constant

    // function to include non-meaningfull words
    function isNonMeaningfulWord(word) {
      return nonMeaningfulWords.includes(word.toLowerCase());
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

// List Item
function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        <span className="quantity">{item.quantity}</span>
        {item.description}
      </span>
      <button>❌</button>
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
