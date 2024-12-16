import axios from 'axios';

const api = axios.create({
  baseURL: import.meta.env.VITE_GITHUB_API_BASE_URL,
});

export const searchGitHubUsers = async (username) => {
  try {
    const response = await api.get(`/search/users?q=${username}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    throw error;
  }
};
