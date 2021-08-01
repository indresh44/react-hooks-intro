import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Fetch() {
  const [results, setResults] = useState([]);

  useEffect(() => {
    axios
      .get("http://hn.algolia.com/api/v1/search?query=reacthooks")
      .then((response) => {
        console.log(response.data.hits);
        setResults(response.data.hits);
      });
  }, []);

  return (
    <>
      <h2>Fetch Data</h2>
      <ul>
        {results.map((result) => (
          <li key={result.objectID}>
            <a href={result.url}>{result.title}</a>
          </li>
        ))}
      </ul>
    </>
  );
}
