import "./result.css";

export default function Result() {
  return (
    <>
      <div className="blue">
        <span className="result-span">Your Result</span>
        <div className="circle">
          <h1 className="overall">76</h1>
          <span className="hundred">of 100</span>
        </div>
        <h2 className="great">Great</h2>
        <p className="perfomance">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </>
  );
}
