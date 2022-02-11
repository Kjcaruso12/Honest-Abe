import { Corporations } from "./Corporation.js"
import { CorpDonations, PACDonations } from "./Donations.js"
import { PoliticianFunding, Politicians } from "./Politician.js"

export const Politics = () => {
    return `
    <h1>Honest Abe</h1>
    ${Politicians()}
    ${Corporations()}
    ${CorpDonations()}
    ${PACDonations()}
    ${PoliticianFunding()}
    `
}