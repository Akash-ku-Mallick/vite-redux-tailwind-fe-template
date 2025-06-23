import './index.css'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { store, persistor } from './store'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RouterProvider router={routes} />
      </PersistGate>
      </Provider>
  </StrictMode>,
)
