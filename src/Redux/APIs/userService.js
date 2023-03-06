import Axios from "./Axios";

// * register
const registerService = async (user) => {
  const { data } = await Axios.post("/users", user);
  if (data) {
    localStorage.setItem("userInfo", JSON.stringify(data));
  }
  return data;
};

// * logout
const logoutService = () => {
  localStorage.removeItem("userInfo");
  return null;
};

// * LOGIN
const loginService = async (user) => {
  const { data } = await Axios.post("/users/login", user);
  if (data) {
    localStorage.setItem("userInfo", JSON.stringify(data));
  }
  return data;
};

// * UPDATE PROFILE
const updateProfileService = async (user, token) => {
  const { data } = await Axios.put("/users", user, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (data) {
    localStorage.setItem("userInfo", JSON.stringify(data));
  }
  return data;
};

// * DELETE PROFILE
const deleteProfileService = async (token) => {
  const { data } = await Axios.delete("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  if (data) {
    localStorage.removeItem("userInfo");
  }
  return data;
};

// * CHANGE PASSWORD
const changePasswordService = async (passwords, token) => {
  const { data } = await Axios.put("/users/password", passwords, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// * GET ALL FAV. MOVIE
const likeMovieService = async (movieId, token) => {
  const { data } = await Axios.post("/users/favorites", movieId, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// * GET ALL FAV. MOVIE
const getFavoriteMovies = async (token) => {
  const { data } = await Axios.get("/users/favorites", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// * DELETE ALL FAV. MOVIE
const deleteFavoriteMovies = async (token) => {
  const { data } = await Axios.delete("/users/favorites", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// * ADMIN GET ALL USERS
const getAllUsersService = async (token) => {
  const { data } = await Axios.get("/users", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

// * ADMIN DELETE USERS
const deleteUserService = async (id, token) => {
  const { data } = await Axios.delete(`/users/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return data;
};

export {
  loginService,
  registerService,
  logoutService,
  updateProfileService,
  deleteProfileService,
  changePasswordService,
  getFavoriteMovies,
  deleteFavoriteMovies,
  getAllUsersService,
  deleteUserService,
  likeMovieService,
};
