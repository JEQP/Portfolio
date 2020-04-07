import axios from "axios";

export default {
    getAbout: function() {
        return axios.get("/about");
    },

    getContact: function() {
        return axios.get("/contact");
    },

    getPortfolio: function() {
        return axios.get("/portfolio");
    }
}