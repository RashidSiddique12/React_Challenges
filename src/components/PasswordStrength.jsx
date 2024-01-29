import { useEffect, useState } from "react";

function PasswordStrength() {
  const [pass, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [hasSpecialChar, setHasSpecialChar] = useState(false);
  const [hasNum, setHasNum] = useState(false);
  const [hasUpper, setHasUpper] = useState(false);
  const [hasLower, setHasLower] = useState(false);

  useEffect(() => {
    // const hasSpecialChar = /[^A-Za-z0-9]/.test(pass);
    // const hasNum = /\d/.test(pass);
    // const hasUpper = /[A-Z]/.test(pass);
    // const hasLower = /[a-z]/.test(pass);
    setHasSpecialChar(/[^A-Za-z0-9]/.test(pass));
    setHasNum(/\d/.test(pass));
    setHasUpper(/[A-Z]/.test(pass));
    setHasLower(/[a-z]/.test(pass));

    let strong = "week";
    if (pass.length > 8 && hasSpecialChar && hasNum && hasUpper && hasLower) {
      strong = "strong";
    } else if (
      pass.length > 8 &&
      (hasSpecialChar || hasNum || hasUpper || hasLower)
    ) {
      strong = "medium";
    }
    setMessage(strong);
  }, [pass]);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <div className="input">
        <input
          type="text"
          value={pass}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <br />{" "}
      <span style={{ color: hasSpecialChar ? "red" : "grey" }}>
        Special Char
      </span>
      <span style={{ color: hasLower ? "red" : "grey" }}>LowerCase</span>
      <span style={{ color: hasUpper ? "red" : "grey" }}>UpperCase</span>
      <span style={{ color: hasNum ? "red" : "grey" }}>Number</span>
      <br />
      {pass && <p>You password is : {message}</p>}
    </div>
  );
}

export default PasswordStrength;
