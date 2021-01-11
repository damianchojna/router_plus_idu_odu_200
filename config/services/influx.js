const Influx = require("influx")

module.exports = {
    influx: {
        host: "nas.lh",
        port: 8086,
        password: "iot",
        username: "iot",
        database: "iot",
        schema: [
            {
                measurement: "net",
                tags: ["device"],
                fields: {
                    currentRx: Influx.FieldType.INTEGER,
                    currentTx: Influx.FieldType.INTEGER,
                    currentSessionDuration: Influx.FieldType.INTEGER,
                    currentSessionDownloaded: Influx.FieldType.INTEGER,
                    currentSessionUploaded: Influx.FieldType.INTEGER,
                    currentSessionTotalUsedData: Influx.FieldType.INTEGER,
                    totalDuration: Influx.FieldType.INTEGER,
                    totalDownloaded: Influx.FieldType.INTEGER,
                    totalUploaded: Influx.FieldType.INTEGER,
                    totalTotalUsedData: Influx.FieldType.INTEGER,
                    signalRsrp: Influx.FieldType.INTEGER,
                },
            },
        ],
    },
}
