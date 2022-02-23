fetch('./data.json').then(response => {
    return response.json();
    })
    .then(data => {
    renderMainPage(data)
});

function renderNavbar(page){
    if (page === "main") {
        return `
        <nav>
            <ul>
                <li class="menu"><a href="#about">About</a></li>
                <li class="menu"><a href="#news">News</a></li>
                <li class="menu"><a href="#projects">Projects</a></li>
            </ul>
        </nav>
        `
    } else {
        return `
        <nav>
            <ul>
                <li class="menu"><a href=".">Go Back</a></li>
            </ul>
        </nav>
        `
    }
}
function renderMainPage(data){
    const queryString = window.location.search
    const urlSearchParams = new URLSearchParams(queryString).get("project")
    if (!!urlSearchParams) {
        renderProjectPage(data.projects[urlSearchParams])
    } else {
        document.querySelector(".container").innerHTML = `
            ${renderNavbar("main")}
            ${renderAbout(data.about)}
            ${renderNews(data.news)}
            ${renderProjects(data.projects)}
        `
    }
}
function renderAbout(about){
    return `
    <section id="about" class="row">
            <div class="col-6">
                <h1 class="animate__animated animate__rubberBand animate__delay-1s">${about.name}</h1>
                <img class="profile" src="${about.photo}" width="200px" height="300px">
                <h4 style="margin: 0;">${about.title}</h4>
                <span>${about.email}</span>
                <br>
                <span>${about.location}</span>
                <br>
                <span><a href="https://drive.google.com/file/d/18mVXBH4VMHyV8Lipw9Evcnu1IjGegTkb/view?usp=sharing"
                        target="_blank"><i class="fa-solid fa-file"></i> Resume</a> | <a href="https://www.linkedin.com/in/jason-tee-516608191/"
                        target="_blank"><i class="fa-brands fa-linkedin"></i></a> | <a href="https://github.com/jtee2000" target="_blank"><i class="fa-brands fa-github"></i></a></span>
            </div>
            <div class="col-6">
                <p style="margin-top: 68px;">
                   ${about.bio_1}
                    <br>
                    <br>
                    ${about.bio_2}
                </p>
            </div>
        </section>`
}
function renderNews(news){
    return `
    <section id="news">
        <h1>News</h1>
        <div class="news-mobile">
            ${news.map((timeline) => {
                return `
                <div>
                    <div>${timeline.title}</div>
                    <div>${timeline.date}</div>
                </div>
                `
            }).join("")}
        </div>
    </section>
    `
}
function renderProjects(projects){
    return `
    <section id="projects">
        <h1>Projects</h1>
        <div class="row">
            ${projects.map((proj) => {
                return `
                <div class="col-6">
                    <h3 style="margin: 0;"><a href="?project=${proj.id}"">${proj.title}</a></h3>
                    <div class="personal-tag">Personal</div>
                    <span><a href=${proj.link_git} target="_blank"><i class="fa-brands fa-github"></i></a> | <a
                            href=${proj.link_main} target="_blank"><i class="fa-solid fa-laptop-code"></i> Demo</a></span>
                    <br>
                    <img class="proj-img" src="${proj.img}" width="600px" height="300px">
                </div>
                `
            }).join("")}
        </section>
    `
}
// see Section 2. Generating HTML based on URL parameters
function renderProjectPage(data){
    console.log("render project page")
    document.querySelector(".container").innerHTML = `
        ${renderNavbar("other")}
        <div style="display: flex; justify-content: center; flex-direction: column; align-items: center;">
            <h1>${data.title}</h1>
            <img src=${data.img} width="75%">
            <br>
            <span>${data.description}</span>
            <br>
            <span>
                <a href=${data.link_git} target="_blank"><i class="fa-brands fa-github"></i></a> | <a
                    href=${data.link_main} target="_blank"><i class="fa-solid fa-laptop-code"></i> Demo</a>
            </span>
        </div>
    `
} 