const React = require('react');

class Layout extends React.Component {
    render () {
        return (
            <html>
                <head>
                    <link rel="stylesheet" href="../css/style.css"/>
                </head>
                <body>
                <header>
                    <nav className="container-fluid">
                        <a href="/portfolio"><img src="../img/flamingo.jpeg" alt="neon flamingo"/></a>
                        <ul>
                            <li><a href="/portfolio/new">New Project</a></li>
                        </ul>
                    </nav>
                </header>
                    {this.props.children}
                <footer></footer>
                </body>
            </html>
        )
    }
}

module.exports = Layout;