import { getBills, getCorporations, getInterests, getPoliticianBills, getPoliticians, getPACS, getPACDonations, getCorporateInterests, getCorpDonations } from "./dataAccess.js"

export const PoliticianInfo = (politician) => {
    let html = `<article class="politicians">
    <section class="politician">
        <header class="politician__name">
            <h1>${politician.name.first} ${politician.name.last}</h1>
        </header>
        <div class="politician_info">
            <div>Age: ${politician.age}</div>
            <div>Represents: ${politician.district}</div>
        </div>
    </section>
</article>`

    return html
}

export const FullPoliticianInfo = (politician) => {
    let html = `<article class="politicians">
        <section>
            <header class="politician__name">
                <h1>${politician.name.first} ${politician.name.last}</h1>
            </header>
            <div class="politician_info">
                <div>Age: ${politician.age}</div>
                <div>Represents: ${politician.district}</div>
            </div>
            <div class="politician_bills">
                <h2>Sponsored Bills</h2>
                `

    return html
}

export const PoliticianFunding = () => {
    const politicians = getPoliticians()
    const pacs = getPACS()
    const PACdonations = getPACDonations()
    const corporateDonations = getCorpDonations()
    const bills = getBills()
    const politicianBills = getPoliticianBills()
    const companies = getCorporations()
    const interests = getInterests()
    const corpInterests = getCorporateInterests()
    let html = ""

    //iterate through politicians to find which bills they sponsored
    const politicianSummary = politicians.map(politician => {
        //add HTML that list all politican info up until the bills they sponsored
        html += FullPoliticianInfo(politician)
        //filter politicianlegislation to get an array of legislation that matches the current politician
        const politicianlegislations = politicianBills.filter(bill => {
            return bill.politicianId === politician.id
        })
        //iterate through policianlegislation array to find the matching legislation information
        const sponsoredBills = politicianlegislations.map(sponsoredBill => {
            const billInfo = bills.find(bill => bill.id === sponsoredBill.legislationId)
            const interestInfo = interests.find(interest => interest.id === billInfo.interestId)
            return `<div>
            ${billInfo.name} (Interest: ${interestInfo.about})
            </div>
        </div>`
        })
        html += sponsoredBills.join("")
        //filter donations to find those with matching politicianIds from politician
        const PACsDonationArr = PACdonations.filter(donation => {
            return politician.id === donation.politicianId
        })

        html += `<div class="politician_funders">
                <h2>Related PACs</h2>
                <ul>`
        const PACNames = PACsDonationArr.map(pacDonation => {
            const matchingPAC = pacs.find(pac => pac.id === pacDonation.pacId)
            return `<li>
                ${matchingPAC.registeredName}
                </li>`
        })
        const relatedPACS = [...new Set(PACNames)]
        html += relatedPACS.join("")

        html += `</ul>
            </div>
            <div class="politician__influencers">
                <h3>Influencing Corporations</h3>
                <ul>`

        //interate through politicianlegislations(array of legislation that the politician has sponsored) to find corporations that share the same interest.

        const matchingCompainesArr = politicianlegislations.map(sponsoredBill => {
            //find the legislation.id that matches sponsoredBill.legislationId
            const billInfo = bills.find(bill => bill.id === sponsoredBill.legislationId)
            //Find which commercialInterest that bill serves
            const interestInfo = interests.find(interest => interest.id === billInfo.interestId)
            //filter through corporationInterests to find all those that match the commercialInterest.id
            const corporateInterest = corpInterests.filter(corpInterest => corpInterest.interestId === interestInfo.id)
            //iterate through corporationInterests to find corporationIds that match corporation.id
            let InfluencingCorporations = []
            const matchingInterest = corporateInterest.map(corpInterest => {
                const selectCompany = PACsDonationArr.map(PACDonation => {
                    const matchingPAC = pacs.find(pac => pac.id === PACDonation.pacId)
                    const CorpDonationArr = corporateDonations.filter(corpDonation => corpDonation.pacId === matchingPAC.id)
                    const corporation = CorpDonationArr.map(matchingCorp => {
                        const matchingCompany = companies.find(matchCompany => matchCompany.id === matchingCorp.corporationId)
                        if (matchingCompany.id === corpInterest.corporationId) {
                            InfluencingCorporations.push( `<li>
                                ${matchingCompany.company}
                                    </li>`
                            )}
                    })
                })
            })
            const newInfluencingCorps = [...new Set(InfluencingCorporations)]
            html += newInfluencingCorps.join("")
        })
        html += `</div>
                    </section>
                </article>`
    })
    return html
}


export const Politicians = () => {
    const politicians = getPoliticians()

    let html = `${politicians.map(PoliticianInfo).join("")}`

    return html
}
