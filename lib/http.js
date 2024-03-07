import axios from "axios";
import config from "./config.js";

axios.interceptors.response.use(res=>{
  return res.data
})

// 获取模板列表
const getRepoList =  async ()=>{
  return axios.get(`https://api.github.com/users/${config.owner}/repos`)
}

const getTagList = async ()=>{
  return axios.get(`https://api.github.com/repos/${config.owner}/react-webpack-project/tags`)
}

export default {
  getRepoList,
  getTagList
}
