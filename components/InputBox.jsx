"use client";
import { useState } from "react";
import axios from "axios";

const InputBox = (props) => {
  const [location, setLocation] = useState("");
  const handleSubmit = async (e) => {
    console.log(location);
    const options = {
      method: "GET",
      url: `https://wttr.in/${location}?format=j1`,
    };

    try {
      const response = await axios.request(options);
      console.log(JSON.stringify(response.data));
      props.setWeatherData(() => {
        return response.data;
      });
      e.target.value = "";
      e.target.placeholder = "Enter your location";
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <input
      type="text"
      className={`w-3/4 rounded-2xl mt-20 h-10 pl-3 bg-slate-200 text-black mb-2 ${props.style}`}
      onChange={(e) => {
        setLocation(e.target.value);
      }}
      onKeyUp={(e) => {
        if (e.key === "Enter") {
          e.target.value = "";
          e.target.placeholder = "Loading...";
          handleSubmit(e);
          //   e.target.value = "";
        }
      }}
      placeholder="Enter your location"
    />
  );
};

export default InputBox;
