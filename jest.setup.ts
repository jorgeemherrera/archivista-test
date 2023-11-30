import '@testing-library/jest-dom'
type Store = {
    [k: string]: string
}
class StorageMock {
    store: Store
    length: number

    constructor() {
        this.store = {}
        this.length = 0
    }

    key(n: number): any {
        if (typeof n === 'undefined') {
            throw new Error("Uncaught TypeError: Failed to execute 'key' on 'Storage': 1 argument required, but only 0 present.")
        }

        if (n >= Object.keys(this.store).length) {
            return null
        }

        return Object.keys(this.store)[n]
    }

    clear() {
        this.store = {}
    }

    getItem(key: string) {
        return this.store[key] || null
    }

    setItem(key: string, value: string) {
        this.store[key] = String(value)
    }

    removeItem(key: string) {
        delete this.store[key]
    }
}

global.localStorage = new StorageMock()
global.sessionStorage = new StorageMock()