export let useDelay = async (ms = 2000) => {
    await new Promise(resolve => {
        setTimeout(() => resolve(true), ms)
    })
}
