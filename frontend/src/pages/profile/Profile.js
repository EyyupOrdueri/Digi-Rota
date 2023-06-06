import React from "react";
import profilepage from "../../image/profile-page.JPG";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
// import { useUsersListener } from "../../auth/firebase";

const Profile = () => {
  const { currentUser } = useContext(AuthContext);
  // console.log(currentUser);

  // const users = useUsersListener();

  // const userCheck = () => {
  //   users.
  // };

  return (
    <div className="text-center">
      <p>Will be soon here</p>

      <div className="row">
        <div className="profileContainer col-lg-3 row">
          <h3>Profil Bilgilerim</h3>

          <div className="card profilKart col-lg">
            <img
              className="card-img-top"
              src={currentUser.photoURL}
              alt="profil-resmi"
            />

            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                Ad Soyad: {currentUser.displayName}
              </li>
              <li className="list-group-item">E-mail: {currentUser.email}</li>
              <li className="list-group-item">
                Hesap Oluşturulma Tarihi: {currentUser.metadata.creationTime}
              </li>
              {/* <li className="list-group-item"></li> */}
            </ul>
          </div>
        </div>

        <div className="faturaContainer col-lg-9">
          <h3>Faturalarım</h3>

          <div className="card profilKart col-lg">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <h5>Onaylanmış Faturalarım</h5>

                {/* <div>
        {userCheck ? users.map((user) => (
          <div class="card w-50 justify-content-center">
            <div class="card-body">
              <h2 class="card-title">
                {" "}
                <span className="text-warning">{user.fullName}</span>
              </h2>
              <ul>
                <li>
                  <h2>Toplam Reklam Gideri: {user.adsExpense}</h2>
                </li>
                <li>
                  <h2>Aylık Gelir: {user.remuneration}</h2>
                </li>
                <li>
                  <h2>Sektör: {user.sectorName}</h2>
                </li>
                <li>
                  {!user.check ? (
                    <h2>Kabul Edildi Mi: Hayır ❌</h2>
                  ) : (
                    <h2>Kabul Edildi Mi: Evet ✅</h2>
                  )}
                </li>
              </ul>

              <button
                className="btn btn-success"
                onClick={() => {
                  handleUpdateClick(user);
                }}
              >
                Kabul Edildi Olarak İşaretle ✅
              </button>

              <button
                className="btn btn-danger"
                onClick={() => {
                  deleteUsers(user.id);
                }}
              >
                Fatura İsteğini Sil
              </button>
            </div>
          </div>
        )) : null}
      </div> */}
              </li>
              <li className="list-group-item">E-mail: {currentUser.email}</li>
              <li className="list-group-item">
                Hesap Oluşturulma Tarihi: {currentUser.metadata.creationTime}
              </li>
              {/* <li className="list-group-item"></li> */}
            </ul>
          </div>
        </div>
      </div>

      <div>
        <img src={profilepage} alt="profile page" className="mainPageImg" />
      </div>
    </div>
  );
};

export default Profile;
