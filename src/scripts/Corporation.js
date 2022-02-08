import { getCorporations } from "./dataAccess.js";

export const CorporationInfo = (corp) => {
    let html = `
    <section class="corporation">
        <header class="corporation__name">
            <h1>${corp.company}</h1>
        </header>
        <div class="corporation_info">
            <div>Address: ${corp.address}</div>
        </div>
    </section>
    `

    return html
}

export const Corporations = () => {
    const corps = getCorporations()
    
    let html = `<article class="corporations">
        ${corps.map(CorporationInfo).join("")}
        </article>
        `

    return html
}