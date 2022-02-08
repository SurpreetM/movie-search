import { FunctionComponent } from "react";
import { MovieInformation } from "./MovieInformation";

interface MovieCardProps {
  movieInfo: MovieInformation;
}
export const MovieCard: FunctionComponent<MovieCardProps> = ({
  movieInfo
}: MovieCardProps) => {
  const { Title, Year, Rated, Poster } = movieInfo;


  return (
    <div className="movie-card">
      <h2>{Title}</h2>
      <span className="movie-card-year">{Year}</span>
      <span className="movie-card-rated">{`Rated: ${Rated}`}</span>
      <img className="movie-poster" src={Poster} alt="Movie Poster" />
    </div>
  );
};


