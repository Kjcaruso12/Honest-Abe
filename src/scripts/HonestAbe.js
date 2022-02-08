import { Corporations } from "./Corporation.js"
import { CorpDonations } from "./Donations.js"
import { Politicians } from "./Politician.js"

export const Politics = () => {
    return `
    <h1>Honest Abe</h1>
    ${Politicians()}
    ${Corporations()}
    ${CorpDonations()}
    `
}