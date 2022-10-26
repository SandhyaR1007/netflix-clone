import React from "react";
import requests from "../utils/Requests";
import Banner from "./Banner";
import Nav from "./Nav";
import Row from "./Row";
import "./styles/HomeScreen.css";
const HomeScreen = () => {
  return (
    <div className="homeScreen">
      {/* navbar */}
      <Nav />

      {/* banner */}
      <Banner />
      {/* rows */}
      <Row
        title="NETFLIX ORIGINALS"
        fetchURL={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchURL={requests.fetchTrending} />
      <Row title="Top Rated" fetchURL={requests.fetchTopRated} />
      <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
      <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies} />
      <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
      <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
    </div>
  );
};

export default HomeScreen;
