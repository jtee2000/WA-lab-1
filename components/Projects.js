function renderProjectItems(projects) {
    return projects.map((proj) => {
                return `
                <div class="col-6">
                    <h3 style="margin: 0;"><a href="?project=${proj.id}"">${proj.title}</a></h3>
                    <div style="display: flex; flex-direction: row;">
                        ${proj.tags.map(d => {
                        return `
                        <div class="personal-tag">${d}</div>
                        `
                    }).join("")}
                    </div>
                    <span><a href=${proj.link_git} target="_blank"><i class="fa-brands fa-github"></i></a> | <a
                            href=${proj.link_main} target="_blank"><i class="fa-solid fa-laptop-code"></i> Demo</a></span>
                    <br>
                    <img class="proj-img" src="${proj.img}" width="600px" height="300px">
                </div>
                `
            }).join("")
}

export default function renderProjects(projects){
    return `
    <section id="projects">
        <h1>Projects</h1>
        <div class="filter">
	        <label>
	            <input type="radio" name="filter" value="all" checked>
            All
            </label>
	        <label>
	            <input type="radio" name="filter" value="Game">
            Game
	        </label>
            <label>
	            <input type="radio" name="filter" value="Clone">
            Clone
	        </label>
            <label>
	            <input type="radio" name="filter" value="JavaScript">
            JavaScript
	        </label>
            <label>
	            <input type="radio" name="filter" value="React">
            React
	        </label>
        </div>
        <div class="row project-items">
            ${renderProjectItems(projects)}
        </section>
    `
}

export function handleProjectFilter(data) {
    let buttons = document.querySelectorAll('.filter input[name="filter"]');
    let filtered;
    buttons.forEach( cond => 
        cond.addEventListener('change', function(event){
            console.log(event.target.value)
            filtered = data.projects.filter((d) => {
                if (event.target.value === 'all') {
                    return true
                } else {
                    return d.tags.includes(event.target.value)}
                })
            if (filtered) {
                document.querySelector('.project-items').innerHTML = renderProjectItems(filtered)
            }
    }))    
}