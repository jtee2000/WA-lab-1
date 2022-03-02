import ProjectDetailPage from "./ProjectDetail.js"

export default function ProjectPage(data) {
    console.log('hello from project page')
    document.querySelector(".container").innerHTML = `
        ${ProjectDetailPage(data)}
    `
}
