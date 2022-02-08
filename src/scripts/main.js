import { fetchCorporateDonations, fetchCorporations, fetchPACDonations, fetchPACS, fetchPoliticians } from "./dataAccess.js"
import { Politics } from "./HonestAbe.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    Promise.all([fetchPoliticians(), fetchCorporations(), fetchPACS(), fetchCorporateDonations(), fetchPACDonations()])
    .then(
        () => {
            mainContainer.innerHTML = Politics()
        }
    )
}

render()