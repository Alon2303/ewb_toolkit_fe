import Axios from "axios";

const res = await Axios.getUri('http://localhost:3010/');

console.log(res)