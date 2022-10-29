import React from "react";
import { useUsersListenerUpdate } from "../../auth/firebase";

const Giris = () => {
  const users = useUsersListenerUpdate();
  console.log(users);
  return (
    <>
      <div>Giris</div>
      <div className="text-center">
        <h1>DİGİ ROTA'YA HOŞGELDİNİZ!</h1>
        <h4>Size kendimizi tanıtmak isteriz.</h4>
      </div>
    </>
  );
};

export default Giris;
