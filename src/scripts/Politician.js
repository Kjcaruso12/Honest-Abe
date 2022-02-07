import { getPoliticians } from "./dataAccess.js"

export const PoliticianInfo = (politician) => {
    let html = `
    <section class="politician">
        <header class="politician__name">
            <h1>${politician.name.first} ${politician.name.last}</h1>
        </header>
        <div class="politician_info">
            <div>Age: ${politician.age}</div>
            <div>Represents: ${politician.district}</div>
        </div>
    </section>
    `

    return html
}

export const Politicians = () => {
    const politicians = getPoliticians()
    
    let html = `<article class="politicians">
        ${politicians.map(PoliticianInfo).join("")}
        </article>
        `

    return html
}