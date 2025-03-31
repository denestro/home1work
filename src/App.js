import React from "react";
import MovieList from "./components/MovieList";

const App = () => {
  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "0 auto" }}>
      <h1>Zustand Movie App</h1>
      <MovieList />
    </div>
  );
};

export default App;
