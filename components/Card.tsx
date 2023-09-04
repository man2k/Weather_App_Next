"use client";
import React from "react";
import InputBox from "./InputBox";
import { useState } from "react";

interface weatherdinf {
  nearest_area: Array<any>;
  current_condition: Array<any>;
}

const Card = () => {
  const [weatherData, setWeatherData] = useState<weatherdinf>(null);
  return (
    <div className="flex min-h-screen flex-col items-center justify-around p-24 pt-2 backdrop-saturate-100">
      {weatherData ? (
        <div>
          <label className={`flex text-7xl font-mono`}>
            <a href="/">🌦️Weather Forcast</a>
          </label>
          <InputBox style="w-full" setWeatherData={setWeatherData} />
        </div>
      ) : (
        <></>
      )}
      <div
        className={`flex-col justify-around grid place-items-center border-black border-2 border-dashed p-36 shadow-xl hover:shadow-emerald-400 backdrop-blur-md	 ${
          weatherData ? "place-items-baseline" : ""
        }`}
      >
        <label
          className={`flex text-7xl font-mono ${weatherData ? "hidden" : ""}`}
        >
          <a href="/#">🌦️Weather Forcast</a>
        </label>
        {weatherData ? <></> : <InputBox setWeatherData={setWeatherData} />}
        {weatherData ? (
          <div className="flex flex-row justify-around place-items-center">
            <div className="flex flex-col justify-around">
              <span className="text-mono text-7xl font-semibold text-black">
                Today
              </span>
              <span className="text-mono text-right text-3xl font-mono">
                {weatherData?.nearest_area[0].areaName[0].value}
              </span>
              <span className="font-bold font-mono text-2xl">
                Temperature: {weatherData?.current_condition[0].FeelsLikeC} °C
              </span>
              <span className="font-bold font-mono text-4xl">
                {weatherData?.current_condition[0].weatherDesc[0].value}
              </span>
              <span className="font-bold font-mono text-2xl">
                Wind Speed: {weatherData?.current_condition[0].windspeedKmph}
              </span>
              <span className="font-bold font-mono text-2xl">
                Precipitation:{" "}
                {Number(weatherData?.current_condition[0].precipInches)}
              </span>
              <span className="font-bold font-mono text-2xl">
                Visibility: {weatherData?.current_condition[0].visibility}
              </span>
            </div>
            <div className="flex flex-col justify-around">
              <label className="text-9xl ml-80">
                {(function () {
                  const temp = weatherData?.current_condition[0].FeelsLikeC;
                  if (temp > 28 && temp < 32) {
                    return "🌞";
                  } else if (temp > 32) {
                    return "🥵";
                  } else if (temp < 28 && temp > 22) {
                    return "🆒";
                  } else if (temp < 22 && temp > 10) {
                    return "❄️";
                  } else if (temp < 10) {
                    return "🥶";
                  }
                })()}
              </label>
            </div>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default Card;
