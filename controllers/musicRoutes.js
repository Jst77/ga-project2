const express = require("express")
const router = express.Router()
const axios = require("axios")
const isLoggedIn = require('../middleware/isLoggedIn')
const db = require('../models')

router.get("/results", function(req, res){
    axios.get("http://theaudiodb.com/api/v1/json/1/search.php?s=coldplay")
    .then(apiData=>{
        console.log("this is api data;",apiData.data.artists[0].strLabel);
        res.render('searchResults', {searchData: apiData.data})
    }) 
    .catch(error=> {
        console.log(error);
        res.render('home')
    })
})

router.get("/mood", function(req, res){
    axios.get("http://theaudiodb.com/api/v1/json/1/search.php?s=coldplay")
    .then(apiData=>{
        console.log("this is api data;",apiData.data.artists[0].strLabel);
        res.render('mood', {searchData: apiData.data})
    }) 
    .catch(error=> {
        console.log(error);
        res.render('home')
    })
})

router.get('/profile', isLoggedIn, (req, res)=>{
    const moods = db.song.getMoods();
    const genres = db.song.getGenres();
    let context = {
        moods: moods,
        genres: genres
    }
    res.render('profile', context)
})

module.exports=router

