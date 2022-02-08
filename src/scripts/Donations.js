import { getCorpDonations, getCorporations, getPACS } from "./dataAccess.js";

export const PACS = (pac) => {
    let html = `
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

export const CorpDonations = () => {
    const donations = getCorpDonations()
    const pacs = getPACS()
    const companies = getCorporations()
    let html = ""
    
    //iterate through PACS
    const pacReceivingDonation = pacs.map(pac => {
        html += `<article class="pacs">`
        html += PACS(pac)
        //filter donations to get donations to the certain pac
        const corpDonationArr = donations.filter(donation => {
            return donation.pacId === pac.id
        })

        const companiesArr = corpDonationArr.map(donation => {
            
            const companyName = companies.find(name => name.id === donation.corporationId)
            //filter donations to find those with matching corporationIds from companies 
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

