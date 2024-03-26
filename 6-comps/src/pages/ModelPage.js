import { useState } from "react";
import Button from "../components/Button";
import Model from "../components/Model";

function ModelPage() {
  const [showModel, setShowModel] = useState(false);
  const handleClick = () => {
    setShowModel(true);
  };
  const handleClose = () => {
    setShowModel(false);
  };
  const actionBar = (
    <div>
      <Button primary onClick={handleClose}>
        Approve
      </Button>
    </div>
  );
  const model = (
    <Model onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept</p>
    </Model>
  );
  return (
    <div>
      <Button primary onClick={handleClick}>
        Open Model
      </Button>
      {showModel && model}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in purus
        mauris. Duis vitae ante nunc. Duis tincidunt ante eget arcu aliquet, non
        venenatis sapien condimentum. Integer id ex finibus, tincidunt nunc id,
        congue enim. Praesent malesuada ac neque ut posuere. Pellentesque
        convallis quis lorem non malesuada. Nulla id cursus lorem. Sed sit amet
        diam et odio dictum efficitur. Vivamus nunc ligula, viverra in lacinia
        et, blandit laoreet nunc.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in purus
        mauris. Duis vitae ante nunc. Duis tincidunt ante eget arcu aliquet, non
        venenatis sapien condimentum. Integer id ex finibus, tincidunt nunc id,
        congue enim. Praesent malesuada ac neque ut posuere. Pellentesque
        convallis quis lorem non malesuada. Nulla id cursus lorem. Sed sit amet
        diam et odio dictum efficitur. Vivamus nunc ligula, viverra in lacinia
        et, blandit laoreet nunc.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in purus
        mauris. Duis vitae ante nunc. Duis tincidunt ante eget arcu aliquet, non
        venenatis sapien condimentum. Integer id ex finibus, tincidunt nunc id,
        congue enim. Praesent malesuada ac neque ut posuere. Pellentesque
        convallis quis lorem non malesuada. Nulla id cursus lorem. Sed sit amet
        diam et odio dictum efficitur. Vivamus nunc ligula, viverra in lacinia
        et, blandit laoreet nunc.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi in purus
        mauris. Duis vitae ante nunc. Duis tincidunt ante eget arcu aliquet, non
        venenatis sapien condimentum. Integer id ex finibus, tincidunt nunc id,
        congue enim. Praesent malesuada ac neque ut posuere. Pellentesque
        convallis quis lorem non malesuada. Nulla id cursus lorem. Sed sit amet
        diam et odio dictum efficitur. Vivamus nunc ligula, viverra in lacinia
        et, blandit laoreet nunc.
      </p>
    </div>
  );
}

export default ModelPage;
