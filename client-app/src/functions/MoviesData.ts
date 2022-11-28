import { tokenToString } from "typescript";
import { uri } from "../App";
import {
  AllMovieInfoType,
  CastType,
  MovieType,
  PersonType,
  TagEntriesType,
  TagType,
} from "../Type/Types";

const connectionFailString: string =
  "Failed to connect to the database! Try again later.";

export const getMovies = async () => {
  try {
    const response: Response = await fetch(uri + "/Movies/", { method: "GET" });
    const data: MovieType[] = await response.json();

    if (!response.ok) throw "";

    return data;
  } catch (ex) {
    throw connectionFailString;
  }
};

export const addMovie = async (movie: AllMovieInfoType, token: string) => {
  try {
    const response: Response = await fetch(`${uri}/Create/movie`, {
      method: "POST",
      headers: {
        Authorization: "Bearer "+ token,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(movie),
    });
    switch (response.status) {
      case 500:
        throw new Error("Invalid name or url! Try again.");
    }
  } catch (ex: any) {
    if (ex.message === "Failed to fetch") {
      throw new Error(connectionFailString);
    }
    throw ex;
  }
};

export const addTag = async (tag: string, token: string) => {
  try {
    const response: Response = await fetch(`${uri}/Create/tag`, {
      headers: {
        Authorization: "Bearer "+ token,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({ Name: tag }),
    });

    switch (response.status) {
      case 500:
        throw new Error("Invalid name or url! Try again.");
    }

    const data = await response.json();
    return await data;
  } catch (ex: any) {
    if (ex.message === "Failed to fetch") {
      throw new Error(connectionFailString);
    }
    throw ex;
  }
};

export const addPerson = async (person: PersonType, token: string) => {
  try {
    const response: Response = await fetch(`${uri}/Create/person`, {
      headers: {
        Authorization: "Bearer "+ token,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(person),
    });
    switch (response.status) {
      case 500:
        throw new Error("Invalid name or url! Try again.");
    }

    const data = await response.json();
    return await data;
  } catch (ex: any) {
    if (ex.message === "Failed to fetch") {
      throw new Error(connectionFailString);
    }
    throw ex;
  }
};

export const getMovie = async (id: string) => {
  try {
    const response: Response = await fetch(`${uri}/Movie/${id}`);
    const data: AllMovieInfoType = await response.json();
    return data;
  } catch (ex) {
    throw connectionFailString;
  }
};

export const getMoviesFromTag = async (id: string) => {
  try {
    const response: Response = await fetch(`${uri}/Tag/${id}/movies`);
    const data: TagType[] = await response.json();
    return data;
  } catch (ex) {
    throw connectionFailString;
  }
};

export const getMoviesFromPerson = async (id: string) => {
  try {
    const response: Response = await fetch(`${uri}/Person/${id}/movies`);
    const data: MovieType[] = await response.json();
    return data;
  } catch (ex) {
    throw connectionFailString;
  }
};

export const getPerson = async (id: string) => {
  try {
    const response: Response = await fetch(`${uri}/Person/${id}`);
    const data: PersonType = await response.json();

    if (!response.ok) throw "";

    return data;
  } catch (ex) {
    throw connectionFailString;
  }
};
export const getTag = async (id: string) => {
  try {
    const response: Response = await fetch(`${uri}/Tag/${id}`);
    const data: TagType = await response.json();

    if (!response.ok) throw "";

    return data;
  } catch (ex) {
    throw connectionFailString;
  }
};

export const getTags = async () => {
  try {
    const response: Response = await fetch(`${uri}/Tags`, {
      method: "GET",
    });
    const data: TagEntriesType[] = await response.json();

    if (!response.ok) throw "";

    return data;
  } catch (ex) {
    throw new Error(connectionFailString);
  }
};

export const getCast = async () => {
  try {
    const response: Response = await fetch(`${uri}/Cast`, {
      method: "GET",
    });
    const data: CastType[] = await response.json();

    if (!response.ok) throw "";

    return data;
  } catch (ex) {
    throw new Error(connectionFailString);
  }
};
