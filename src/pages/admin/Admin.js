import React, { useCallback, useState } from "react";
import { useUsersListener, deleteUsers } from "../../auth/firebase";
import { doc, updateDoc } from "firebase/firestore";
import { db } from "../../auth/firebase";
import {
  toastErrorNotify,
  toastSuccessNotify,
} from "../../helpers/ToastNotify";

const Admin = () => {
  const [id, setId] = useState("");

  const users = useUsersListener();

  const handleUpdateClick = useCallback(async (user) => {
    setId(user.id);

    const ref = doc(db, "users", user.id);

    if (!user.check) {
      await updateDoc(ref, {
        check: true,
      });
      toastSuccessNotify("You signed it as Checked");
    } else {
      await updateDoc(ref, {
        check: false,
      });
      toastErrorNotify("You signed it as Unchecked");
    }

    setId("");
  }, []);

  console.log(id);

  return (
    <div>
      {users.map((user) => (
        <div className="text-warning d-flex gap-5 pb-5 justify-content-center">
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

          <button
            className="btn btn-success"
            onClick={() => {
              handleUpdateClick(user);
            }}
          >
            Mark as Checked ✅
          </button>

          <button
            className="btn btn-danger"
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
