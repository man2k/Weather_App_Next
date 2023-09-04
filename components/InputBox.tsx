"use client";
import { FC, KeyboardEvent, useState } from "react";
import axios from "axios";
interface Props {
  setWeatherData: Function;
  style?: string;
}
const InputBox: FC<Props> = (props) => {
  const [location, setLocation] = useState<string>("");
  const handleSubmit = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    // console.log(location);
    const options = {
      method: "GET",
      url: `https://wttr.in/${location}?format=j1`,
    };

    try {
      const response = await axios.request(options);
      // console.log(JSON.stringify(response.data));
      props.setWeatherData(() => {
        // console.log(typeof response.data);
        return response.data;
      });
      (e.target as HTMLInputElement).value = "";
      (e.target as HTMLInputElement).placeholder = "Enter your location";
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <input
      type="text"
      className={`w-3/4 rounded-2xl mt-20 h-10 pl-3 bg-slate-200 text-black mb-2 shadow-lg shadow-yellow-300 ${props.style}`}
      onChange={(e) => {
        setLocation(e.target.value);
      }}
      onKeyUp={(e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
          (e.target as HTMLInputElement).value = "";
          (e.target as HTMLInputElement).placeholder = "Loading...";
          handleSubmit(e);
          //   e.target.value = "";
        }
      }}
      placeholder="Enter your location"
    />
  );
};

export default InputBox;
