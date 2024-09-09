import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params: {
        key: 'd2763ffa212543ac9ab7af2e9d33fa5b' // the API is free. Building a proxy to keep my key safe is not inside the scope of this project
    }

})