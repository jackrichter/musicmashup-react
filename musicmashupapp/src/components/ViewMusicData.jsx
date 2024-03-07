import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import FooterComponent from "./FooterComponent";
import axios from "axios";
import Background from "./Background";
import JSONPretty from "json-stringify-pretty-compact";
import LogoForSearchResult from "./LogoForSearchResult";

const ViewMusicData = () => {
  const { mbid } = useParams();
  // eslint-disable-next-line no-unused-vars
  const [responseData, setResponseData] = useState({});
  const musicDataRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8181/music/musicbrainz/" + mbid);
        // Assuming the response data is in JSON format
        setResponseData(JSON.stringify(response.data));
        musicDataRef.current = JSON.stringify(response.data);
        // console.log("Ref: ", musicDataRef.current);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    function fetchData2() {
      fetch("http://localhost:8181/music/musicbrainz/" + mbid)
        .then(res => res.json())
        .then(data => {
          setResponseData(data);
          console.log(data);
          musicDataRef.current = data;
          console.log("musicDataRef");
          console.log(musicDataRef.current);
        });
    }

    // fetchData();
    fetchData2();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  var data = musicDataRef.current;
  // console.log(data);
  // console.log("ResponseData: ", responseData);
  const jsonDisplay = JSONPretty(musicDataRef.current, { indent: 2 });
  // const jsonDisplay = pretty.replace(/{|}/g, "");
  // console.log("Ref Pretty: ", jsonDisplay);

  return (
    <div className="container py-md-5">
      <Background />
      {data ? (
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
