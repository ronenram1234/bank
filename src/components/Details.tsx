import { deepStrictEqual } from "assert";
import { FunctionComponent } from "react";

export interface DetailsTransaction {
  Month: string;
  Cost: number;
  Description: string;
}

const DetailsTrans: DetailsTransaction[] = [
  { Month: "December", Cost: 300, Description: "Supermarket" },
  { Month: "December", Cost: 250, Description: "Clothing" },
  { Month: "December", Cost: 1000, Description: "Electricity" },
  { Month: "December", Cost: 235, Description: "McDonalds" },
  { Month: "December", Cost: 720, Description: "Taxes" },
  { Month: "November", Cost: 450, Description: "Supermarket" },
  { Month: "November", Cost: 130, Description: "Pizza Hut" },
  { Month: "October", Cost: 220, Description: "Supermarket" },
];

function processLine(line: DetailsTransaction) {
  return (
    <>
      <tr>
        <td>{line.Month}</td>
        <td>{line.Cost}</td>
        <td>{line.Description}</td>
      </tr>
    </>
  );
}

interface DetailsProps {}

const Details: FunctionComponent<DetailsProps> = () => {
  return (

<>
{ DetailsTrans.length==0 ? (<p>Empty array</p>) :(
    <div style={{ border: "3px solid blue" }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Month</th>
            <th scope="col">Cost</th>
            <th scope="col">Description</th>
          </tr>
        </thead>
        <tbody>{DetailsTrans.map((item) => processLine(item))}</tbody>
      </table>
    </div>)

}
    </>
  );
};

export default Details;
