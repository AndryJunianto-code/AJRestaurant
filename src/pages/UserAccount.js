import React from "react";
import { FaUser } from "react-icons/fa";
import { useGlobalContext } from "../context";

export default function UserAccount() {
  const { userInfo } = useGlobalContext();
  return (
    <section className="userAcc">
      <div className="userAcc-img">
        <div className="userAcc-icon">
          <FaUser />
        </div>
        <input type="file" />
      </div>
      <h2>Logged in as {userInfo}</h2>
    </section>
  );
}
