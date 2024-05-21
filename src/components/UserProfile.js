import React from "react";

function UserProfile({ userInfo }) {
  return (
    <div>
      {userInfo.map((user, index) => (
        <div key={index}>
          <p>
            {user.name.title} {user.name.first} {user.name.last}
          </p>
          <div>
            <img
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
            />
          </div>
        </div>
      ))}
    </div>
  );
}

export default UserProfile;
