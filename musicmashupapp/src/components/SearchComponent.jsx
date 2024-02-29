import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchComponent = () => {
  const [mbid, setMbid] = useState("");

  const navigate = useNavigate();

  function getMusicBrainzId(e) {
    e.preventDefault();
    console.log("MBID: " + mbid);
    navigate("/view-music-info/" + `${mbid}`);
  }

  return (
    <div className="lower-form">
      <div className="container">
        <form onSubmit={getMusicBrainzId}>
          <div className="form-group col-auto">
            <label htmlFor="search-by-mbid" className="text-muted mg-1">
              <strong>MusicBrainz Identifier</strong>
            </label>
            <input onChange={e => setMbid(e.target.value)} type="text" value={mbid} className="form-control form-control-lg" autoFocus placeholder="Enter a valid MBID" id="search-by-mbid" />
          </div>
          <div className="col-auto">
            <button type="submit" className="btn btn-primary mb-3">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SearchComponent;
