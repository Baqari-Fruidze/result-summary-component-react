import "./result.css";

export default function Result() {
  return (
    <>
      <div className="blue">
        <span className="result-span">Your Result</span>
        <div className="circle">
          <h1>76</h1>
          <span>of 100</span>
        </div>
        <h2>Great</h2>
        <p>
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </>
  );
}
