const siteUrl = "https://www.gumtree.co.za";
const axios = require("axios");
const fetchData = async () => {
    const result = await axios.get(siteUrl);
    return cheerio.load(result.data);
};