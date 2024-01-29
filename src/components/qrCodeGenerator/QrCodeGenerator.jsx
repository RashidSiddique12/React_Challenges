import QRCode from "qrcode.react";
import React, { useState } from "react";

function QrCodeGenerator() {
  const [value, setValue] = useState("");
  const [qrValue, setQrValue] = useState("");
  return (
    <div style={{ paddingTop: "5rem" }}>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            setQrValue(value);
          }}
        >
          <input
            type="text"
            placeholder="Entre to generate code"
            style={{ padding: "1rem" }}
            onChange={(e) => setValue(e.target.value)}
          />
          <button>submit</button>
        </form>
      </div>

      {qrValue !== "" ? <div style={{marginTop: "5rem"}}><QRCode value={qrValue} size={300} /> </div>: null}
    </div>
  );
}

export default QrCodeGenerator;
