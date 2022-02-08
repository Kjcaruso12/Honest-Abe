import { fetchCorporateDonations, fetchCorporations, fetchPACS, fetchPoliticians } from "./dataAccess.js"
import { Politics } from "./HonestAbe.js"
import { Politicians } from "./Politician.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    Promise.all([fetchPoliticians(), fetchCorporations(), fetchPACS(), fetchCorporateDonations()])
    .then(
        () => {
            mainContainer.innerHTML = Politics()
        }
    )
}

render()