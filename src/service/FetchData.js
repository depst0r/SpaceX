export default class FetchData {

    _startUrl = 'https://api.spacexdata.com/v4/'

    getResource = async url => {
        const res = await fetch(url)

        if (!res.ok) {
            throw new Error (`Error ${res.status}`)
        }

        return await res.json()
    }

     getRocket = async () => await this.getResource(this._startUrl + 'roketc') 

     getLaunches = async () => await this.getResource(this._startUrl + 'launches/past') 

     getCompany = async () => await this.getResource(this._startUrl + 'company') 
}