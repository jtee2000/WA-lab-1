export default function renderAbout(about){
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