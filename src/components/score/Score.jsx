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
          <div className="o reaction">
            <div className="mini">
              <img src={reaction} alt="" />
              <span className="reaction-span">reaction</span>
            </div>
            <div className="numbers">
              <span className="numone">80</span>
              <span className="numtwo">/100</span>
            </div>
          </div>
          <div className="o  memory">
            <div className="mini">
              <img src={memory} alt="" />
              <span className="span-memory">Memory</span>
            </div>
            <div>
              <span className="numone">92</span>
              <span className="numtwo">/100</span>
            </div>
          </div>
          <div className="o  verbal">
            <div className="mini">
              <img src={verbal} alt="" />
              <span className="verbal-span">Verbal</span>
            </div>
            <div>
              <span className="numone">61</span>
              <span className="numtwo">/100</span>
            </div>
          </div>
          <div className="0  visual">
            <div className="mini">
              <img src={visual} alt="" />
              <span className="visual-span">Visual</span>
            </div>
            <div>
              <span className="numone">61</span>
              <span className="numtwo">/100</span>
            </div>
          </div>
        </div>
        <button className="btn"> continue</button>
      </div>
    </>
  );
}
