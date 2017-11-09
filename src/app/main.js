// @flow
import type { RouterHistory, Router } from 'react-router'
import type { Store } from 'redux'
import { Provider } from 'react-redux'
import { sagaMiddleware } from 'app/composition/middleware'
import rootSaga from 'app/sagas'
import App from 'app/components/App/App'

export const Main = (
  store:Store<*, *, *>,
  history:RouterHistory,
  Router:Router
) => (
  <Provider store={store}>
    <Router history={history}>
      <App />
    </Router>
  </Provider>
)

export const run = () => sagaMiddleware.run(rootSaga)
