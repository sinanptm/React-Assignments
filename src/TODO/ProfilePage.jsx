import React, { Fragment } from "react";
import { Link, useParams } from "react-router-dom";
const profiles = [1, 2, 3, 4, 5, 6];

export default function ProfilePage() {

  const params = useParams()

  return (
    <div>
      <h1>Profile Page</h1>
      <p>{params.id ?`Hello ${params.id}`:''}</p>
      {profiles.map((profile, i) => {
        return (
          <Fragment key={i}>
            <Link to={`/profile/${profile}`} >
                Profile {profile}
            </Link>
            <br />
          </Fragment>
        );
      })}
    </div>
  );
}


