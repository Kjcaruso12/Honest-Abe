const state = {
    politicians: [],
    corporations: [],
    interests:[],
    PACS: [],
    legislations:[],
    politicianlegislations:[],
    PACDonations:[],
    corporateDonations:[],
    corporateInterests:[]
}

const API = "http://localhost:8088"

export const fetchPoliticians = () => {
    return fetch(`${API}/politicians`)
        .then(response => response.json())
        .then(
            (politician) => {
                state.politicians = politician
            }
        )
}

export const fetchCorporations = () => {
    return fetch(`${API}/corporations`)
        .then(response => response.json())
        .then(
            (corp) => {
                state.corporations = corp
            }
        )
}

export const fetchCorporateDonations = () => {
    return fetch(`${API}/corporatedonations`)
        .then(response => response.json())
        .then(
            (donation) => {
                state.corporateDonations = donation
            }
        )
}

export const fetchPACDonations = () => {
    return fetch(`${API}/pacdonations`)
        .then(response => response.json())
        .then(
            (donation) => {
                state.PACDonations = donation
            }
        )
}

export const fetchPACS = () => {
    return fetch(`${API}/pacs`)
        .then(response => response.json())
        .then(
            (pac) => {
                state.PACS = pac
            }
        )
}

export const fetchBills = () => {
    return fetch(`${API}/legislations`)
        .then(response => response.json())
        .then(
            (bill) => {
                state.legislations = bill
            }
        )
}

export const fetchPoliticianBills = () => {
    return fetch(`${API}/politicianlegislations`)
        .then(response => response.json())
        .then(
            (bill) => {
                state.politicianlegislations = bill
            }
        )
}

export const fetchInterests = () => {
    return fetch(`${API}/interests`)
        .then(response => response.json())
        .then(
            (interest) => {
                state.interests = interest
            }
        )
}

export const fetchCorporateInterests = () => {
    return fetch(`${API}/corporateinterests`)
        .then(response => response.json())
        .then(
            (interest) => {
                state.corporateInterests = interest
            }
        )
}

export const getPoliticians = () => {
    return state.politicians.map(politician => ({...politician}))
}

export const getCorporations = () => {
    return state.corporations.map(corporation => ({...corporation}))
}

export const getCorpDonations = () => {
    return state.corporateDonations.map(donation => ({...donation}))
}

export const getPACDonations = () => {
    return state.PACDonations.map(donation => ({...donation}))
}

export const getPACS = () => {
    return state.PACS.map(pac => ({...pac}))
}

export const getBills = () => {
    return state.legislations.map(bill => ({...bill}))
}

export const getPoliticianBills = () => {
    return state.politicianlegislations.map(bill => ({...bill}))
}

export const getInterests = () => {
    return state.interests.map(interest => ({...interest}))
}

export const getCorporateInterests = () => {
    return state.corporateInterests.map(interest => ({...interest}))
}