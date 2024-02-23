import { useState, useEffect } from "react";

const SearchComponent = () => {
  const [mbid, setMbid] = useState([]);

  useEffect(() => {
    resetInput();
  }, []);

  function getMusicBrainzData(e) {
    e.preventDefault();
    console.log("MBID: " + mbid);
    setMbid("");
  }

  function resetInput() {
    setMbid("");
  }

  return (
    <div className="lower-form">
      <div className="container">
        <form onSubmit={getMusicBrainzData}>
          <div className="form-group col-auto">
            <label htmlFor="search-by-mbid" className="text-muted mg-1">
              <strong>MusicBrainz Identifier</strong>
            </label>
            <input onChange={e => setMbid(e.target.value)} type="text" value={mbid} className="form-control form-control-lg" autoFocus placeholder="Enter a valid MBID" id="search-by-mbid" />
          </div>
          <div className="col-auto">
            <button onClick={() => resetInput} type="submit" className="btn btn-primary mb-3">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchComponent;
