import '@styles/globals.css'
import Provider from '@components/session/Provider'
import Nav from '@components/navUI/Nav'

export const metadata = {
    title: 'Layout',
    description: 'Layout',
}

const Rootlayout = ({children}) => {
  return (
    <html lang="en">
        <body>
            <Provider>
            <div className="main">
                <div className="gradient" />
            </div>

            <main className="app">
                <Nav />
                {children}
            </main>
            </Provider>
        </body>
    </html>
  )
}

export default Rootlayout