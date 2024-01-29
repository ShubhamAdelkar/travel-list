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
    <div className="add-form">
      <h3>What do you need for your trip ? 😄</h3>
    </div>
  );
}

function Packinglist() {
  return <div className="list">LIST</div>;
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have X items in your list, you packed X</em>
    </footer>
  );
}

export default App;
