import React, { useEffect } from "react";
import { List, Card, Button } from "antd";
import useMovieStore from "../store/useMovieStore";

const MovieList = () => {
  const { movies, fetchMovies } = useMovieStore();

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return (
    <Card title="Список фильмов">
      <Button onClick={fetchMovies} type="primary" style={{ marginBottom: "10px" }}>
        Загрузить фильмы
      </Button>
      <List
        itemLayout="horizontal"
        dataSource={movies}
        renderItem={(movie) => (
          <List.Item>
            <List.Item.Meta title={movie.title} description={movie.body} />
          </List.Item>
        )}
      />
    </Card>
  );
};

export default MovieList;
