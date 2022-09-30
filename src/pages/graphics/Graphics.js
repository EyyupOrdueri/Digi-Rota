import "./graphics.css";
import { useUsersListenerUpdate } from "../../auth/firebase";
// import { useState } from "react";

const Graphics = () => {
  // const [order, setOrder] = useState("");
  // const [loading, setLoading] = useState(false);

  const users = useUsersListenerUpdate();

  return (
    <>
      <h3 className="text-center">Table of Price Per Month</h3>
      <table className="table table-striped" id="monthlyPrice">
        <thead>
          <tr>
            <th scope="col" id="topLeftCorner">
              #
            </th>
            <th scope="col">Full Name</th>
            <th scope="col">Sector</th>
            <th scope="col">Price per month $</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <th scope="row">1</th>
            <td>Gürkan Ordueri</td>
            <td>Gym</td>
            <td>8.000</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Abdullah Benli</td>
            <td>Beauty Centers</td>
            <td>6.000</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Eyyüp Ordueri</td>
            <td>Restaurants</td>
            <td>2.000</td>
          </tr> */}
          {users.map((user) =>
            user.check ? (
              <tr>
                <th scope="row">#</th>
                <td>{user.fullName}</td>
                <td>{user.sectorName}</td>
                <td>{user.remuneration}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>

      <h3 className="text-center">Table of Total Advertisement Expense</h3>
      <table className="table table-striped" id="adsExpense">
        <thead>
          <tr>
            <th scope="col" id="topLeftCorner">
              #
            </th>
            <th scope="col">Full Name</th>
            <th scope="col">Sector</th>
            <th scope="col">Total advertisement expense $</th>
          </tr>
        </thead>
        <tbody>
          {/* <tr>
            <th scope="row">1</th>
            <td>Gürkan Ordueri</td>
            <td>Gym</td>
            <td>34.000</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Abdullah Benli</td>
            <td>Beauty Centers</td>
            <td>23.000</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Eyyüp Ordueri</td>
            <td>Restaurants</td>
            <td>19.000</td>
          </tr> */}
          {users.map((user) =>
            user.check ? (
              <tr>
                <th scope="row">#</th>
                <td>{user.fullName}</td>
                <td>{user.sectorName}</td>
                <td>{user.adsExpense}</td>
              </tr>
            ) : null
          )}
        </tbody>
      </table>
    </>
  );
};

export default Graphics;
