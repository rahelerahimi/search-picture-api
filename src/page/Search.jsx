import React, { useState } from "react";
import axios from "axios";
import Header from "../Component/search/haeder/Header";
import Gallery from "../Component/search/gallery/Gallery";

const Search = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState(null);

  const searchImage = async () => {
    await axios
      .get(
        `https://api.unsplash.com/search/photos/?client_id=9Tsexd1OOfhBPb75mCSqFGp17IDbXEY7vC-XSg03D7I&query=${value}`
      )
      .then((res) => {
        setResult(res.data.results);
      });
  };

  return (
    <>
      <Header
        change={(e) => setValue(e.target.value)}
        value={value}
        search={searchImage}
      />

      <Gallery result={result} />
    </>
  );
};

export default Search;
