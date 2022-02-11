import { getCorpDonations, getCorporations, getPACDonations, getPACS, getPoliticians } from "./dataAccess.js";

export const PACDonos = (pac) => {
    let html = `<article class="pacs">
    <section class="pac">
        <header class="pac__name">
            <h1>${pac.registeredName}</h1>
        </header>
        <div class="pac_info">
            <div>${pac.address}</div>
        </div>
        <div class=pac_donors">
            <h2>Donors</h2>
            </ul>
    `

    return html
}

export const PoliticianDonos = (politician) => {
    let html = `<article class="politicians">
    <section class="politician">
        <header class="politician__name">
            <h1>${politician.name.first} ${politician.name.last}</h1>
        </header>
        <div class="politician_info">
            <div>Age: ${politician.age}</div>
            <div>Represents: ${politician.district}</div>
        </div>`

    return html
}

export const CorpDonations = () => {
    const donations = getCorpDonations()
    const pacs = getPACS()
    const companies = getCorporations()
    let html = ""

    //iterate through PACS
    const pacReceivingDonation = pacs.map(pac => {
        html += PACDonos(pac)
        //filter donations to get donations to the current pac
        const corpDonationArr = donations.filter(donation => {
            return donation.pacId === pac.id
        })
        //filter donations to find those with matching corporationIds from companies 
        const companiesArr = corpDonationArr.map(donation => {

            const companyName = companies.find(name => name.id === donation.corporationId)
            html += `<li>
            ${companyName.company} ($${donation.amount})
            </li>
            `
        })
        html += companiesArr.join("")

        html += `</ul>
            </div>
        </section>
    </article>`
    })
    return html
}

export const PACDonations = () => {
    const politicians = getPoliticians()
    const pacs = getPACS()
    const donations = getPACDonations()
    let html = ""

    //iterate through PACS
    const politicianReceivingDonation = politicians.map(politician => {
        //filter donations to get donations to the current politician
        const PACDonationArr = donations.filter(donation => {
            return donation.politicianId === politician.id
        })
        html += PoliticianDonos(politician)
        //filter donations to find those with matching corporationIds from companies 
        if (PACDonationArr.length) {
            html += `<div class=pac_donations">
            <h2>PAC Donations</h2>
            </ul>`
        }
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



