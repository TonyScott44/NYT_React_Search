import axios from "axios";

const $ = window.$;

export default {
    // Gets all articles
    getArticles: function() {
        return axios.get("/api/articles");
    },
    // Gets the article with the given id
    getArticle: function(id) {
        return axios.get("/api/articles/" + id);
    },
    // Deletes the article with the given id
    deleteArticle: function(id) {
        return axios.delete("/api/articles/" + id);
    },
    // Saves a article to the database
    saveArticle: function(articleData) {
        return axios.post("/api/articles", articleData);
    },
    getNew: function(event) {
        console.log(event);
        var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
        url += '?' + $.param({
            'api-key': "a3d2784f51764ed6bce767b430c7a877",
            'q': event.topic,
            'begin_date': event.startYear,
            'end_date': event.endYear
        });
        $.ajax({
            url: url,
            method: 'GET',
        }).done(function(result) {
            console.log(result);
        }).fail(function(err) {
            throw err;
        });
    },





};

