import { Corporations } from "./Corporation.js"
import { CorpDonations, PACDonations } from "./Donations.js"
import { PoliticianFunding, Politicians } from "./Politician.js"


const test = () => {
const arr = [{id: 1, name: 'one'}, {id: 2, name: 'two'}, {id: 1, name: 'one'}]
const ids = arr.map(o => o.id)
const filtered = arr.filter(({id}, index) => ids.includes(id, index + 1))

console.log(filtered)
}
export const Politics = () => {
    return `
    <h1>Honest Abe</h1>
    ${Politicians()}
    ${Corporations()}
    ${CorpDonations()}
    ${PACDonations()}
    ${PoliticianFunding()}
    ${test()}
    `
}