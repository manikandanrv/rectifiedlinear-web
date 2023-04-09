import pThrottle from 'p-throttle'
import hygraphClient from './hygraph-client'

// Set the limit of # of calls per interval in ms (5 per second)
const throttle = pThrottle({limit: 5, interval: 1000})
export const throttledFetch = throttle(async (...args) => {
    const [query, vars] = args

    const data = await hygraphClient.request(query, vars)

    return data
})