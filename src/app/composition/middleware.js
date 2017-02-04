import createLogger from 'redux-logger'
import promiseMiddleware from 'redux-promise-middleware'
import thunkMiddleware from 'redux-thunk'
import { hasWindow, isBrowser } from 'app/utils'
import { outClientViaSocketIO } from 'redux-via-socket.io'
import createSagaMiddleware from 'redux-saga'
import { pipe, tap } from 'ramda'

const log = debug('DISPATCH:')

export const sagaMiddleware = createSagaMiddleware()
export const middleware = [
  thunkMiddleware,
  promiseMiddleware(),
  sagaMiddleware,
]

/* istanbul ignore else  */
if (hasWindow) {
  middleware.push(
    outClientViaSocketIO(require('./socket')),
  )
} else {
  middleware.push(
    () => next => pipe(tap(log), next)
  )
}

if (isBrowser) {
  middleware.push(
    createLogger({
      predicate: () => debug.enabled(),
      collapsed: true,
    })
  )
}

