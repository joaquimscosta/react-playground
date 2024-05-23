# Personal Digital Assistants (PDAs)

This project is a simple React application that displays profile cards for different Personal Digital Assistants (PDAs) like Alexa, Cortana, and Siri. The profile cards display the name, handle, image, and a brief description of each PDA.

## Main Concepts

### React Components

The project uses functional React components to structure the UI. The `App` component is the root component, and it uses the `ProfileCard` component to display individual profile cards.

```javascript
import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assistants</p>
        </div>
      </section>
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-3">
              <ProfileCard
                title="Alexa"
                handle="@alexa99"
                image={AlexaImage}
                description="Alexa was created by Amazon and helps you buy things"
              />
            </div>
              ...
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

```

### Props

Props (short for properties) are used to pass data from the `App` component to the `ProfileCard` component. Each `ProfileCard` receives a title, handle, image, and description as props.

```javascript
function ProfileCard(props) {
  const { title, handle, image, description } = props;
  return (
    <figure className="image is-1by1">
      <img src={image} alt={title} />
    </figure>
  );
}

export default ProfileCard;
```

### CSS-in-JS

The project uses the Bulma CSS framework for styling, and the styles are applied directly in the JSX code.

#### Add Dependency

```sh
npm install bulma
```

#### Add Bulma Style in Your Code

```javascript
import "bulma/css/bulma.css";
```

### Module Imports

The project uses ES6 module imports to include the necessary components and resources. For example, images are imported as modules and passed as props to the `ProfileCard` component.

```javascript
import AlexaImage from "./images/alexa.png";
```

### JSX

JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript code. It is used extensively in this project to define the UI of the React components.

### Entry Point

The entry point of the application is the `index.js` file. This file renders the `App` component into the root DOM node. The `App` component then renders multiple `ProfileCard` components, each with different props representing the different PDAs.

```javascript
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
root.render(<App />);

```
