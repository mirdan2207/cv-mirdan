import React from "react";

function ContactInformation({ telegram, email, github }) {
  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold">Contact Information</h2>
      <p className="text-lg">
        Telegram: <a href={telegram}>Send message</a>
      </p>
      <p className="text-lg">Email: {email}</p>
      <p className="text-lg">
        Github:{" "}
        <a className="" href={github}>
          {github}
        </a>
      </p>
    </div>
  );
}

export default ContactInformation;
