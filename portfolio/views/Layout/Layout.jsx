const React = require('react');

class Layout extends React.Component {
    render () {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="/css/style.css"/>
                    <title>{this.props.title}</title>
                </head>
                <body>
                <nav className="container-fluid">
                    <a href="/portfolio"><img src="/img/flamingo.jpeg" alt="neon flamingo"/></a>
                    <ul>
                        <li key="1"><a href="/portfolio/new">New Project</a></li>
                        <li key="2"><a href="/portfolio/about">About</a></li>
                    </ul>
                </nav>
                    {this.props.children}
                </body>
            </html>
        )
    }
}

module.exports = Layout;