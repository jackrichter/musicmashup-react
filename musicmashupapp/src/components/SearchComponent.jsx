import { useEffect, useState } from "react";

const SearchComponent = () => {
  return (
    <div className="lower-form">
      <div className="container">
        <form>
          <div className="form-group col-auto">
            <label htmlFor="search-by-mbid" className="text-muted mg-1">
              <strong>MusicBrainz Identifier</strong>
            </label>
            <input type="text" className="form-control form-control-lg" autoFocus placeholder="Enter a valid MBID" id="search-by-mbid" />
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
