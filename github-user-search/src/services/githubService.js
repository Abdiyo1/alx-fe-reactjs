import axios from "axios";

const api = axios.create({
  baseURL: "https://api.github.com/search/users?q={query}",
});

export const fetchUserData = async ({ username, location, repos }) => {
  try {
    let query = "";

    if (username) query += `${username} in:login `;
    if (location) query += `location:${location} `;
    if (repos) query += `repos:>${repos}`;

    const response = await api.get(`/search/users?q=${query.trim()}`);
    return response.data; // The API returns an `items` array
  } catch (error) {
    throw new Error("Error fetching advanced search results");
  }
};

