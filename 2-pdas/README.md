# Personal Digital Assistants (PDAs)

This project is a simple React application that displays profile cards for different Personal Digital Assistants (PDAs) like Alexa, Cortana, and Siri. The profile cards display the name, handle, image, and a brief description of each PDA.

The main concepts used in this project are:

**React Components**: The project uses functional React components to structure the UI. The App component is the root component, and it uses the ProfileCard component to display individual profile cards.

```javascript
import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";
import SiriImage from "./images/siri.png";

function App() {
  return (
        <ProfileCard
          title="Alexa"
          handle="@alexa99"
          image={AlexaImage}
          description="Alexa was created by Amazon and helps you buy things"
        />
  );
}

export default App;
```

**Props**: Props (short for properties) are used to pass data from the App component to the ProfileCard component. Each ProfileCard receives a title, handle, image, and description as props.

```javascript
function ProfileCard(props) {
  const { title, image } = props;
  return (
    <figure className="image is-1by1">
      <img src={image} alt={title} />
    </figure>
  );
}

export default ProfileCard;
```

**CSS-in-JS**: The project uses the Bulma CSS framework for styling, and the styles are applied directly in the JSX code.

Add dependency

```shell
npm install bulma
```

Add Bulma style in your code

```javascript
import "bulma/css/bulma.css";
```

Module Imports: The project uses ES6 module imports to include the necessary components and resources. For example, images are imported as modules and passed as props to the ProfileCard component.

```javascript
import AlexaImage from "./images/alexa.png";
```

JSX is a syntax extension for JavaScript that allows you to write HTML-like code in your JavaScript code. It is used extensively in this project to define the UI of the React components.

The entry point of the application is the index.js file. This file renders the App component into the root DOM node. The `App` component then renders multiple `ProfileCard` components, each with different props representing the different PDAs.