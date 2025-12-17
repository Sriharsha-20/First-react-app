import UserInfo from "./UserInfo";

function UserProfile() {
  const name = "Sriharsha";
  const age = 22;

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        width: "300px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <h2>User Profile</h2>

      <UserInfo name={name} age={age} />
    </div>
  );
}

export default UserProfile;
