import RouterStatusConnection from "./RouterStatusConnection"

export default interface RouterStatusStatisticsInterface {
    currentSpeed: {
        rx: number
        tx: number
    }
    currentSession: {
        duration: number
        downloaded: number
        uploaded: number
        totalUsedData: number
    }
    total: {
        duration: number
        downloaded: number
        uploaded: number
        totalUsedData: number
    }
    status: RouterStatusConnection
}
