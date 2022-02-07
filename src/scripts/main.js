import { fetchPoliticians } from "./dataAccess.js"
import { Politicians } from "./Politician.js"

const mainContainer = document.querySelector("#container")

const render = () => {
    fetchPoliticians().then(
        () => {
            mainContainer.innerHTML = Politicians()
        }
    )
}

render()