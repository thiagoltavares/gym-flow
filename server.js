const express = require('express');
const nunjucks = require('nunjucks')
const routes = require("./routes")

const server = express()


server.use(express.static('public'))
server.use(routes)

server.set("view engine", "njk")

nunjucks.configure("view", {
    express:server,
    autoescape: false,
    noCache: true
})

/* server.get("/", function(request, response){
    const about = {
        avatar_url: 'https://yt3.ggpht.com/a/AATXAJwycVEsEOTXaNg2EqQmRGfmvvuwKo5tmxuvtb53ViA=s900-c-k-c0x00ffffff-no-rj" alt="Mayk Brito"',
        name: "Mayk Brito",
        role: "Instrutor - Rocketseat",
        description: 'Programador full-stack, focado em trazer o melhor ensino para inciantes em programação. Colaborador da <a href="https://rocketseat.com.br/" target="_blank">Rocketseat</a></p>',
        links: [
            
            { name: "github", url: "https://github.com/maykbrito" },
            { name: "twitter", url: "https://Twitter.com/maykbrito" },
            { name: "linkedin", url: "https://linkedin.com/in/maykbrito" },
        ]

    }
    return response.render("about", {about})
})

server.get("/portfolio", function(request, response){
    return response.render("portfolio", {items: videos})
})

server.get("/video", function(request, response){
    const id = request.query.id

    const video = videos.find((video) => video.id === id)

    if(!video){
        return response.send("video not found")
    }
    return response.render("video", { item: video })
}) */

server.listen(5000, function() {
    console.log("Server is running");
})

