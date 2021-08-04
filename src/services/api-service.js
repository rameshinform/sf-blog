/* All API calls to the REST API */
import axios from "axios";

const url="https://restedblog.herokuapp.com/rameshg/api";



let getAllPost = async () => {
  return await axios
    .get(url)
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};

let getPostDetail = async (id) => {
    console.log(id);
  return await axios
    //.get(`https://restedblog.herokuapp.com/rameshg/api/${id}`)
    .get(`${url}/${id}`)
    .then((res) => {
      console.log(res.data);
      return res.data;
    });
};

let deletePost = async (id) => {
  console.log(id);
  return axios
    //.delete(`https://restedblog.herokuapp.com/rameshg/api/${id}`)
    .delete(`${url}/${id}`)
    .then((res) => {
      if (res.status === 200) {
        return id;
      }
    });
};

let createPost = async (post) => {
  return axios
    //.post(`https://restedblog.herokuapp.com/rameshg/api/`, { post })
    .post(`${url}`, { title: post.title, text: post.text })
    .then((res) => {
      if (res.status === 201) {
        const {
          data: { id },
        } = res;
        return { ...post, id};
      }
    });
};

let editPost = async (postUpdate) => {
  const { id } = postUpdate;
    console.log(postUpdate);
  return axios
   // .put(`https://restedblog.herokuapp.com/rameshg/api/${id}`, { postUpdate })
    .post(`${url}/${id}`, { title: postUpdate.title, text: postUpdate.text })
    .then((res) => {
      if (res.status === 200) {
        return { ...postUpdate };
      }
    });
};



export const apiService = {
    getAllPost,
    getPostDetail,
    deletePost,
    createPost,
    editPost
};