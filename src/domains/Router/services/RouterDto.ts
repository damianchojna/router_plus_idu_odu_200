import RouterStatusStatisticsInterface from "../models/RouterStatusStatisticsInterface"
import RouterStatusConnection from "../models/RouterStatusConnection"
import RouterSignalStatusInterface from "../models/RouterSignalStatusInterface"

export default class RouterDto {
    static rawStatusStatisticsDataToModel(rawData: string): RouterStatusStatisticsInterface {
        const arrayData = rawData.split("\n")

        return {
            currentSpeed: {
                rx: parseInt(arrayData[0]), // KB/s KiloBytes
                tx: parseInt(arrayData[1]), // KB/s KiloBytes
            },
            currentSession: {
                duration: parseInt(arrayData[9]), // seconds
                downloaded: parseInt(arrayData[2]), // MB MegaBytes
                uploaded: parseInt(arrayData[3]), // MB MegaBytes
                totalUsedData: parseInt(arrayData[4]), // MB MegaBytes
            },
            total: {
                duration: parseInt(arrayData[5]), //seconds
                downloaded: parseInt(arrayData[6]), // MB MegaBytes
                uploaded: parseInt(arrayData[7]), // MB MegaBytes
                totalUsedData: parseInt(arrayData[8]), // MB MegaBytes
            },
            status: arrayData[10] as RouterStatusConnection,
        }
    }

    static rawSignalStatsToDataToModel(rawData: string): RouterSignalStatusInterface {
        const arrayData = rawData.split("\n")

        return {
            connectionStatus: arrayData[0] as RouterStatusConnection,
            singalLevel: arrayData[1],
            simCardStatus: arrayData[2],
            signalRsrp: parseInt(arrayData[4]),
            remote: parseInt(arrayData[6]),
            iduVer: arrayData[7],
            oduVer: arrayData[8],
            dtbVer: arrayData[9],
            haveSms: parseInt(arrayData[11]),
            fullSms: parseInt(arrayData[12]),
            getOperatorName: arrayData[14],
        }
    }
}
