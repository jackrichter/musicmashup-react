import { useEffect, useState, useRef } from "react";
import { useParams } from "react-router-dom";
import FooterComponent from "./FooterComponent";
import axios from "axios";
import Background from "./Background";

const ViewMusicData = () => {
  const { mbid } = useParams();
  const [responseData, setResponseData] = useState(null);
  const musicDataRef = useRef(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8181/music/musicbrainz/" + mbid);
        // Assuming the response data is in JSON format
        setResponseData(JSON.stringify(response.data));
        musicDataRef.current = JSON.stringify(response.data);
        console.log("Ref: ", musicDataRef.current);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  console.log("Data:");
  var data = musicDataRef.current;
  console.log(data);
  console.log("ResponseData: ", responseData);
  var splitData = JSON.stringify(data);
  var splitArr = splitData.split(",");
  splitArr.forEach(e => {
    e.replace('"', "");
  });
  console.log("splitArr: ", splitArr[0]);

  return (
    <div className="container py-md-5">
      <Background />
      {data ? (
        <div className="row d-flex justify-content-center">
          <textarea id="textarea" className="form-form-control-color info-div" cols={150} rows={30} ref={musicDataRef} value={musicDataRef.current}></textarea>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <FooterComponent />
    </div>
  );
};

export default ViewMusicData;
