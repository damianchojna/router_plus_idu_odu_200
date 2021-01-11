import container from "./container"
;(async () => {
    const { routerStatisticsJob, routerSignalStatusJob, influx } = container

    const names = await influx.getDatabaseNames()
    if (!names.includes("iot")) await influx.createDatabase("iot")

    routerStatisticsJob.start()
    routerSignalStatusJob.start()
})()
