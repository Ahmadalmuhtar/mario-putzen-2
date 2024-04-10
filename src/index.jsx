import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import posthog from 'posthog-js'

posthog.init('<ph_project_api_key>', { api_host: '<ph_instance_address>' })

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
)
