import RouterApi from "../services/RouterApi/RouterApi"
import RouterStatusStatisticsInterface from "../models/RouterStatusStatisticsInterface"
import RouterDto from "../services/RouterDto"
import { InfluxDB } from "influx"
import RouterSignalStatusInterface from "../models/RouterSignalStatusInterface"

export default class RouterRepository {
    constructor(protected routerApi: RouterApi, protected influx: InfluxDB) {}

    async getStatusStatistics(): Promise<RouterStatusStatisticsInterface> {
        const rawData = await this.routerApi.getStatusStatistics()

        return RouterDto.rawStatusStatisticsDataToModel(rawData)
    }

    async getSignalStatus(): Promise<RouterSignalStatusInterface> {
        const rawData = await this.routerApi.getSignalStatus()

        return RouterDto.rawSignalStatsToDataToModel(rawData)
    }

    async saveSignalStatus(model: RouterSignalStatusInterface, date: Date): Promise<void> {
        await this.influx.writePoints([
            {
                measurement: "internet",
                tags: {
                    device: "ROUTER_IDU-OUD-200",
                },
                fields: {
                    signalRsrp: model.signalRsrp,
                },
                timestamp: date,
            },
        ])
    }

    async saveStatusStatistics(model: RouterStatusStatisticsInterface, date: Date): Promise<void> {
        await this.influx.writePoints([
            {
                measurement: "internet",
                tags: {
                    device: "ROUTER_IDU-OUD-200",
                },
                fields: {
                    currentRx: model.currentSpeed.rx,
                    currentTx: model.currentSpeed.tx,
                    currentSessionDuration: model.currentSession.duration,
                    currentSessionDownloaded: model.currentSession.downloaded,
                    currentSessionUploaded: model.currentSession.uploaded,
                    currentSessionTotalUsedData: model.currentSession.totalUsedData,
                    totalDuration: model.total.duration,
                    totalDownloaded: model.total.downloaded,
                    totalUploaded: model.total.uploaded,
                    totalTotalUsedData: model.total.totalUsedData,
                },
                timestamp: date,
            },
        ])
    }
}
