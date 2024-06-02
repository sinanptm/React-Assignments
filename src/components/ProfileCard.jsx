import React from 'react';

function ProfileCard({ name, email }) {
  return (
    <div className="profile-card">
      <h1>{name}</h1>
      <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
    </div>
  );
}

export default ProfileCard;