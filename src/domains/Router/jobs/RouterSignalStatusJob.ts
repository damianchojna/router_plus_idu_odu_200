import RouterRepository from "../repositories/RouterRepository"

export default class RouterSignalStatusJob {
    static CYCLE_INTERVAL_SECONDS = 1
    static LOOP_INTERVAL_MS = 1000
    protected previousCycle: number | undefined = undefined
    protected previousLoopDate: Date = new Date()

    constructor(protected routerRepository: RouterRepository) {}

    protected fetchAndSave = async (dateToSave: Date) => {
        const data = await this.routerRepository.getSignalStatus()
        await this.routerRepository.saveSignalStatus(data, dateToSave)
    }

    job = async () => {
        const now = new Date()
        const currentSeconds = now.getSeconds()
        const currentCycle = Math.trunc(currentSeconds / RouterSignalStatusJob.CYCLE_INTERVAL_SECONDS)

        if (currentCycle === this.previousCycle) return

        const dateToSave = new Date()
        dateToSave.setSeconds(currentCycle * RouterSignalStatusJob.CYCLE_INTERVAL_SECONDS, 0)

        try {
            await this.fetchAndSave(dateToSave)
            this.previousCycle = currentCycle
        } catch (e) {
            console.error("Job Error while executing the request ", e)
        }
    }

    loop = async () => {
        const now = new Date()
        const diffTime = +now - +this.previousLoopDate
        if (diffTime < RouterSignalStatusJob.LOOP_INTERVAL_MS) {
            return await new Promise((r) => setTimeout(r, RouterSignalStatusJob.LOOP_INTERVAL_MS - diffTime))
        }

        await this.job()
        this.previousLoopDate = now
    }

    public start = async () => {
        while (true) {
            await this.loop()
        }
    }
}
