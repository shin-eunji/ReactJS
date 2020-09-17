import {createBrowserHistory} from 'history'

const HISTORY = createBrowserHistory()


const Navigate = (url) => {
    HISTORY.push(url)
}

export {HISTORY, Navigate};