import { getPoliticians } from "./dataAccess.js"

export const PoliticianInfo = (politician) => {
    let html = `<article class="politicians">
    <section class="politician">
        <header class="politician__name">
            <h1>${politician.name.first} ${politician.name.last}</h1>
        </header>
        <div class="politician_info">
            <div>Age: ${politician.age}</div>
            <div>Represents: ${politician.district}</div>
        </div>
    </section>
</article>`

    return html
}

export const FullPoliticianInfo = (politician) => {
    let html = `<article class="politicians">
        <section>
            <header class="politician__name">
                <h1>${politician.name.first} ${politician.name.last}</h1>
            </header>
            <div class="politician_info">
                <div>Age: ${politician.age}</div>
                <div>Represents: ${politician.district}</div>
            </div>
            <div class="politician_bills>
                <h2>Sponsored Bills</h2>
                `

    return html
}

export const PoliticianFunding = () => {
    const politicians = getPoliticians()
    const pacs = getPACS()
    const donations = getPACDonations()
    let html = ""

    //iterate through PACS
    const politicianSummary = politicians.map(politician => {
        //filter donations to get donations to the current politician
        const PACDonationArr = donations.filter(donation => {
            return donation.politicianId === politician.id
        })
            html += PoliticianDonos(politician)
            //filter donations to find those with matching corporationIds from companies 
            const PACsArr = PACDonationArr.map(donation => {

                const PACName = pacs.find(name => name.id === donation.pacId)
                html += `<li>
            ${PACName.registeredName} ($${donation.amount})
            </li>
            `
            })
            html += PACsArr.join("")

            html += `</ul>
            </div>
        </section>
    </article>`
    })
    return html
}

export const Politicians = () => {
    const politicians = getPoliticians()

    let html = `${politicians.map(PoliticianInfo).join("")}`

    return html
}

