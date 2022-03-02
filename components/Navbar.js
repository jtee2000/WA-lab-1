export default function renderNavbar(page){
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