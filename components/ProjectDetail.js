import Navbar from './Navbar.js'

export default function ProjectDetailPage(data) {
    return `
        ${Navbar("other")}
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