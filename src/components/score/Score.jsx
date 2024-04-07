import "./score.css";
import memory from "/images/icon-memory.svg";
import reaction from "/images/icon-reaction.svg";
import verbal from "/images/icon-verbal.svg";
import visual from "/images/icon-visual.svg";

export default function Score() {
  return (
    <>
      <div className="bottom-con">
        <span className="summary">summary</span>
        <div className="parent">
          <div className="reaction">
            <div>
              <img src={reaction} alt="" />
              <span>reaction</span>
            </div>
            <div>
              <span>80</span>
              <span>/100</span>
            </div>
          </div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  );
}
