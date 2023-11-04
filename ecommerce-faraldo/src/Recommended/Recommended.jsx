import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Gibson" title="Gibson" />
          <Button onClickHandler={handleClick} value="Fender" title="Fender" />
          <Button onClickHandler={handleClick} value="Ibanez" title="Ibanez" />
          <Button onClickHandler={handleClick} value="Jackson" title="Jackson" />
        </div>
      </div>
    </>
  );
};

export default Recommended;