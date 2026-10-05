"use client";

import { useState } from "react";

export default function UserProfile({ name }) {

  const [showDetails, setShowDetails] =
    useState(false);

  return (
    <>
      <h2>{name}</h2>

      <button
        onClick={() =>
          setShowDetails(!showDetails)
        }
      >
        Show Details
      </button>

      {showDetails && (
        <p>
          Computer Programming Student at
          Humber Polytechnic. Interested in
          Web Development, React and
          Front-End Technologies.
        </p>
      )}
    </>
  );
}