import React, { useState } from "react";

function Nama() {
  const [nama, setNama] = useState("");

  const handleChange = (e) => {
    setNama(e.target.value);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Masukkan nama"
        value={nama}
        onChange={handleChange}
      />
      <p>{nama}</p>
    </div>
  );
}

export default Nama;
