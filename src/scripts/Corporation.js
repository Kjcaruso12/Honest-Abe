import { getCorporations } from "./dataAccess.js";

export const CorporationInfo = (corp) => {
    let html = `<article class="corporations">
    <section class="corporation">
        <header class="corporation__name">
            <h1>${corp.company}</h1>
        </header>
        <div class="corporation_info">
            <div>Address: ${corp.address}</div>
        </div>
    </section>
    </article>
    `

    return html
}

export const Corporations = () => {
    const corps = getCorporations()

    let html = `${corps.map(CorporationInfo).join("")}`

    return html
}