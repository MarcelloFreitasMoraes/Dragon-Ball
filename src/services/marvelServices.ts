import axios from "axios";
import md5 from "md5";
import { useEffect } from "react";

const baseUrl = `http://gateway.marvel.com/v1/public/characters`;

const publicKey = "65f2918914581c909fa90e44ca117531";

const privateKey = "2e1fe5c824cab320bc7936836458faba0cf74e16";

const ts = Number(new Date());

const hash = md5(ts + publicKey + privateKey);

const API = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public/',
  params: {
    ts,
    apikey: publicKey,
    hash
  }
})
export default API