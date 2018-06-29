class Backend {
  async getUser() {
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))
    await sleep(3000)
    return {firstname: 'Ewing', lastname: 'Lin'}
  }
}

export default new Backend()
