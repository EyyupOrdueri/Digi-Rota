import React from "react";
import { useUsersListener, deleteUsers } from "../../auth/firebase";

const Admin = () => {
  const users = useUsersListener();

  return (
    <div>
      {users.map((user) => (
        <div className="text-warning d-flex gap-5 pb-5">
          <ul>
            <li>
              <h2>Full Name: {user.fullName}</h2>
            </li>
            <li>
              <h2>Total Ads Expense: {user.adsExpense}</h2>
            </li>
            <li>
              <h2>Remuneration: {user.remuneration}</h2>
            </li>
            <li>
              <h2>Sector Name: {user.sectorName}</h2>
            </li>
            <li>
              {!user.check ? <h2>Check: False</h2> : <h2>Check: True</h2>}
            </li>
          </ul>

          <button onClick={() => {}}>Mark as Checked ✅</button>

          <button
            onClick={() => {
              deleteUsers(user.id);
            }}
          >
            delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Admin;
