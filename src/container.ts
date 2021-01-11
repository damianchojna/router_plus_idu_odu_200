import * as Conflakes from "conflakes"
import * as Influx from "influx"
import RouterRepository from "./domains/Router/repositories/RouterRepository"
import RouterApi from "./domains/Router/services/RouterApi/RouterApi"
import RouterStatisticsJob from "./domains/Router/jobs/RouterStatisticsJob"
import Logger from "./domains/Logger/Logger"
import RouterSignalStatusJob from "./domains/Router/jobs/RouterSignalStatusJob"

const config = new Conflakes().load(__dirname + `/../config/config.yml`).getConfig(false)
const logger = new Logger(config.get("logger"))
const influx = new Influx.InfluxDB(config.get("influx"))
const routerApi = new RouterApi(config.get("router"), logger)
const routerRepository = new RouterRepository(routerApi, influx)
const routerStatisticsJob = new RouterStatisticsJob(routerRepository)
const routerSignalStatusJob = new RouterSignalStatusJob(routerRepository)

const container = {
    influx,
    routerStatisticsJob,
    routerSignalStatusJob,
    logger,
}

export default container
