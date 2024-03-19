import Button from "../components/Button";
import { GoBellFill, GoDatabase, GoHomeFill } from "react-icons/go";

function ButtonApp() {
  const handleClick = () => {};

  return (
    <div>
      <div>
        <Button success rounded outline onClick={handleClick} className="mb-2">
          <GoBellFill />
          Hello
        </Button>
      </div>
      <div>
        <Button danger onMouseLeave={handleClick}>
          <GoHomeFill />
          World
        </Button>
      </div>

      <div>
        <Button warning>Ok</Button>
      </div>
      <div>
        <Button primary>
          <GoDatabase />
          Click Me!
        </Button>
      </div>
      <div>
        <Button secondary outline>
          Bye
        </Button>
      </div>
      <div>
        <Button>Oops</Button>
      </div>
    </div>
  );
}

export default ButtonApp;
