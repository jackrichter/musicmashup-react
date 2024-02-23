import axios from "axios";

const BASE_URL = "http://localhost:8181/music/musicbrainz";

export const getMusicBrainzInfo = mbid => axios.get(BASE_URL + "/" + mbid);
