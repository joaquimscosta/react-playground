// 1. Import the React and ReactDOM libraries
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// 2. Get a reference to the root element in index.html
const rootElement = document.getElementById("root");

// 3. Tell react to take control of that element
const root = ReactDOM.createRoot(rootElement);

// 4. Create a react component
// function App() {
//   return <input placeholder="Hi there" />;
// }
// 5. Show the component on the screen
root.render(<App />);

// ../../components/common/Button
