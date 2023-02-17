import React from 'react'
import SearchBar from '../../components/search/Search'
import LoadingSpinner from "../../components/loadingSpinner/LoadingSpinner";
import TableContainer from '../../components/table/tableContainer/TableContainer';
import { axiosInstance } from '../../config'
import { useState, useRef, useEffect } from 'react';
import { Link } from "react-router-dom";
import "./Home.css"
import { lowerFirst } from 'lodash';
import dotenv from "dotenv";


// for google api
dotenv.config();

export default function Home() {

  const [title, setJobsTitle] = useState("");
  const [location, setLocation] = useState("");
  const [jobResult, setJobResult] = useState([])
  const [isLoading, setIsLoading] = useState(false);
  const [numJobsSaved, setNumJobsSaved] = useState(JSON.parse(localStorage.getItem("savedJobs")).length || 0)

  // 1. google autocomplete
  const autoCompleteRef = useRef();
  const inputRef = useRef();

  const options = {
    types: ['country', 'administrative_area_level_1'],
    fields: ["name"],
    strictBounds: false,
  };

  //  2. load script so we can enter google api keys
  const loadScript = (url, callback) => {
    let script = document.createElement("script");
    script.type = "text/javascript";

    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState === "loaded" || script.readyState === "complete") {
          script.onreadystatechange = null;
          callback();
        }
      };
    } else {
      script.onload = () => callback();
    }

    script.src = url;
    document.getElementsByTagName("head")[0].appendChild(script);
  };

  // 3. after load script we can init google autocomplete
  const initAutoComplete = async () => {
    // - init autocomplete
    autoCompleteRef.current = new window.google.maps.places.Autocomplete(
      inputRef.current,
      options
    );
    // - add listener with callback that set location
    autoCompleteRef.current.addListener("place_changed", async function () {
      const place = await autoCompleteRef.current.getPlace();
      setLocation(place.name)
    });
  }

  // 4. load script and init autocomplete on component mount
  useEffect(() => {
    // console.log("process.env.REACT_APP_BASE_URL:", process.env.REACT_APP_BASE_URL);
    // console.log("process.env.REACT_APP_GOOGLE_API:", process.env.REACT_APP_GOOGLE_API);
    //  - load
    loadScript(
      `https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_GOOGLE_API}&libraries=places&callback=Function.prototype`,
      initAutoComplete)

    // If script not yet loaded, load it
    // const isScriptLoaded = JSON.parse(localStorage.getItem("isScriptLoaded"))
    // if (! isScriptLoaded) {


    //   // - set to true so it wontt be loaded second time
    //   localStorage.setItem("isScriptLoaded", true)
    // }
  }, []);

  //  5. scroll to top when new job result appears
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [jobResult])



  // 6. handlers
  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    // get data and set
    const res = await axiosInstance.get(`jobs/query/loc?title=${title}&location=${location}`);
    console.log("res", res.data);
    setJobResult(res.data)
    setIsLoading(false)
  }

  // 7. pass result to react table
  return (
    <div className='home'>
      <div className='homeTop'>
        <SearchBar handleSubmit={handleSearchSubmit}
          title={title}
          location={location}
          setJobsTitle={setJobsTitle}
          setLocation={setLocation}
          inputRef={inputRef}

        />
        <div className='homeDashboard'>
          <Link className="social link" to={"/dashboard"}>
            <div className='homeDashboardIcon'>
              <div className='homeFa'>
                <i className="fa-solid fa-user-secret" />
              </div>
              {numJobsSaved}
            </div>
          </Link>
        </div>
      </div>
      {isLoading ? <LoadingSpinner /> : <div></div>}
      <TableContainer
        jobResult={jobResult}
        setNumJobsSaved={setNumJobsSaved}
        isHomeState={true} />
    </div>
  )
}

