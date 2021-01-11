import axios, { AxiosInstance } from "axios"
import RouterApiOptionsInterface from "./RouterApiOptionsInterface"
import Logger from "../../../Logger/Logger"

export default class RouterApi {
    protected http: AxiosInstance
    protected options: RouterApiOptionsInterface

    constructor(options: RouterApiOptionsInterface, protected logger: Logger) {
        this.http = axios.create({ baseURL: options.host, timeout: 2000 })
        this.options = options
    }

    protected async login() {
        const params = new URLSearchParams()
        params.append("loginName", this.options.login)
        params.append("loginPassword", this.options.password)

        const result = await this.http.post("/goform/formLogin", params, {
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
        })

        this.logger.debug("RouterApi.login result:", result.headers)
    }

    protected async logout(): Promise<void> {
        const result = await this.http.get("/goform/douserlogout")

        this.logger.debug("RouterApi.logout result:", result.headers)
    }

    public async getStatusStatistics(): Promise<string> {
        // Fetch statistics data work without login ;)

        const result = await this.http.post("/goform/formshowStatistics", "status", {
            headers: { "Content-Type": "Content-Type: text/plain" },
        })
        this.logger.debug("RouterApi.getStatusStatistics result:", result.headers, result.data)

        return result.data
    }

    public async getSignalStatus(): Promise<string> {
        // Fetch lteStatus data work without login ;)

        const result = await this.http.post("/goform/showlteStatus", "singal", {
            headers: { "Content-Type": "Content-Type: text/plain" },
        })
        this.logger.debug("RouterApi.getSignalStatus result:", result.headers, result.data)

        return result.data
    }
}
