export default class FetchData {

    getResource = async url => {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error (`Error ${res.status}`)
        }

        return await res.json()
    }

    getRocket = async () => await this.getResource('https://api.spacexdata.com/v4') 

    getLaunches = async () => await this.getResource('https://api.spacexdata.com/v4') 

    getCompany = async () => await this.getResource('https://api.spacexdata.com/v4') 
}