function renderNewsItems(news) {
    return news.map((timeline) => {
        return `
            <div>
                <div>${timeline.title}</div>
                <div>${timeline.date}</div>
            </div>
        `
    }).join("")
}

export default function renderNews(news){
    return `
    <section id="news">
        <h1>News</h1>
        <div class="search">
            <input type="search" name='news' placeholder="Search News...">
        </div>
        <div class="news-mobile">
            ${renderNewsItems(news)}
        </div>
    </section>
    `
}

export function handleNewsFilter(data) {
    let filteredData;
    document.querySelector('.search input[name="news"]')
        .addEventListener('input', (event) => {
            filteredData = data.news.filter((d) => d.title.toLowerCase().includes(event.target.value))
            if (filteredData) {
                document.querySelector('.news-mobile').innerHTML = renderNewsItems(filteredData)
            }
    })
}