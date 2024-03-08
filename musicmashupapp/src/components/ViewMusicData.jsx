import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import FooterComponent from "./FooterComponent";
import Background from "./Background";
import JSONPretty from "json-stringify-pretty-compact";
import LogoForSearchResult from "./LogoForSearchResult";

const ViewMusicData = () => {
  const { mbid } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [responseData, setResponseData] = useState({});
  const musicDataRef = useRef(null);

  useEffect(() => {
    function fetchData() {
      fetch("http://localhost:8181/music/musicbrainz/" + mbid)
        .then(res => res.json())
        .then(data => {
          setResponseData(data);
          musicDataRef.current = data;
        });
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var displayData = musicDataRef.current;
  const jsonDisplay = JSONPretty(musicDataRef.current, { indent: 2 });

  return (
    <div className="container py-md-5">
      <Background />
      {displayData ? (
        <div className="row d-flex justify-content-center">
          <textarea readOnly="true" id="textarea" className="form-form-control-color info-div" cols={200} rows={30} value={jsonDisplay}></textarea>
        </div>
      ) : (
        <p>
          <LogoForSearchResult />
        </p>
      )}
      <FooterComponent />
    </div>
  );
};

export default ViewMusicData;
