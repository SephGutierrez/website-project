import axios from "axios";

const host = 'http://localhost:8080';

const API = {
  login: (email, pass, success) => {
      axios.post(`${host}/api/users/login`, {email: email, password: pass})
      .then(res => {
        success(res);
      });
  },
  register: (name, email, pass, success) => {
      axios.post(`${host}/api/users`, {name: name, email: email, password: pass})
      .then(res => {
        success(res);
      })
      .catch(err => {
        success(err);
      })
  },
  getUsers: (token, success) => {
    axios.get(`${host}/api/users?access_token=${token}`)
    .then(res => { 
      success(res);
    })
  },
  getPosts: (token, success) => {
    axios.get(`${host}/api/Posts?access_token=${token}`)
    .then(res => {
      success(res);
    })
  },
  getSitePosts: (skip, success) => {
    axios.get(`${host}/api/Posts`, {
      params: {
        filter: {
          skip: skip,
          limit: 10,
          include: 'PostImage'
        }
      }
    })
    .then(res => {
      success(res);
    })
  },
  addPost: (post, token, success) => {
    console.log("we are adding post", post);
    axios.post(`${host}/api/Posts?access_token=${token}`, post)
    .then(res => {
      success(res);
    });
  },
  updatePost: (post, token, success) => {
    axios.patch(`${host}/api/Posts/${post.id}?access_token=${token}`, post)
    .then(res => {
      success(res);
    })
  },
  getSinglePost: (id, token, success) => {
    axios.get(`${host}/api/Posts${id}?access_token=${token}`)
    .then(res => {
      success(res);
    })
  }
}

export default API;