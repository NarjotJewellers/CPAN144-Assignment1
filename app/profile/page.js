import Navbar from "../../components/Navbar";
import UserProfile from "../../components/UserProfile";

export default function Profile() {
  return (
    <>
      <Navbar />

      <div className="container">
        <div className="card">
          <UserProfile name="Rohit Mishra" />
        </div>
      </div>
    </>
  );
}