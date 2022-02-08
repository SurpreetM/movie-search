import { isConstructorDeclaration } from "typescript";
import { MovieInformation } from "./MovieInformation";

export function fetchMovieInformation(
  title: string,
  onSuccessCallback: (moveInformation: MovieInformation) => void
) {
  const url = `https://www.omdbapi.com/?t=${title}&apikey=947e8cd3`;
  console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      onSuccessCallback(result);
    })
    .catch((e) => {
      console.log(e);
    });

}
