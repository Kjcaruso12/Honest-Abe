import { fetchBills, fetchCorporateDonations, fetchCorporateInterests, fetchCorporations, fetchInterests, fetchPACDonations, fetchPACS, fetchPoliticianBills, fetchPoliticians } from "./dataAccess.js"
import { Politics } from "./HonestAbe.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    Promise.all([fetchPoliticians(), fetchCorporations(), fetchPACS(), fetchCorporateDonations(), fetchPACDonations(), fetchInterests(), fetchCorporateInterests(), fetchBills(), fetchPoliticianBills()])
    .then(
        () => {
            mainContainer.innerHTML = Politics()
        }
    )
}

render()