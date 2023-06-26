import { useState } from "react";
import "./App.css";

function App() {
  const [query, setQuery] = useState("");
  const [message, setMessage] = useState('')
  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const regex =
      /^(SELECT)\s[a-zA-Z0-9_\.\*,\s]+\s(FROM)\s[a-zA-Z0-9_\.]+(\s(WHERE)\s[a-zA-Z0-9_\.\s]+\s?[=><!]\s?[a-zA-Z0-9_\.\s]+)?$/i;

    if (regex.test(query)) {
      setMessage("La consulta SQL es válida.");
    } else {
      setMessage("La consulta SQL no es válida.");
    }
  };

  return (
    <>
      <form onSubmit={handleOnSubmit} style={{ display: "flex", flexDirection: "column" }}>
        <textarea
          type="text"
          name="input"
          onChange={handleChange}
          cols={50}
          rows={10}
        />
        <br />
        <button type="submit">Validar</button>
      </form>
      <div>{message}</div>
    </>
  );
}

export default App;
