import { FunctionComponent } from "react";

interface TotalsProps {}

const Totals: FunctionComponent<TotalsProps> = () => {
  return (
    <div className="container" style={{ border: "3px solid green" }}>
      <div className="d-flex justify-content-around">
        <div className="card bg-black  text-white " style={{ width: "18rem" }}>
          <div className="card-body">
            <h6 className="card-title ">Balance</h6>
            <h2 className="card-subtitle mb-2 " >2220000</h2>
          </div>
        </div>
        <div className="card  bg-danger text-white" style={{ width: "18rem" }}>
          <div className="card-body">
            <h6 className="card-title">Wasted this month</h6>
            <h2 className="card-subtitle mb-2 ">0000</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Totals;
