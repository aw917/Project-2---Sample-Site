const React = require('react');
const Layout = require('./Layout/Layout.jsx')

class About extends React.Component {
    render () {
        return (
            <Layout
            title="About">
                <h1>About</h1>
                <div className="about-box">
                    <h3>Favorite Poets</h3>
                    <ul>
                        <li>Byron</li>
                        <li>Baudelaire</li>
                        <li>Rilke</li>
                        <li>Shelley</li>
                    </ul>
                    <h3>Favorite Philosophers</h3>
                    <ul>
                        <li>Plato</li>
                        <li>Baudrillard</li>
                        <li>Sloterdijk</li>
                        <li>McLuhan</li>
                    </ul>
                    <h3>Favorite Movies</h3>
                    <ul>
                        <li>Andrei Rublev</li>
                        <li>Ikiru</li>
                        <li>Forbidden Kingdom</li>
                        <li>Belle De Jour</li>
                    </ul>
                </div>
                <marquee behavior="scroll" direction="right" scrollamount="10">subtle</marquee>
            </Layout>
        )
    }
}

module.exports = About;