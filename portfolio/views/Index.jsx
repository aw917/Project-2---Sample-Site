const React = require('react');
const Layout = require('./Layout/Layout.jsx')

class Index extends React.Component {
    render () {
        const project = this.props.projects
        return (
            <Layout>
                <div className="index-project-area">
                    <h1>Projects:</h1>
                    {
                    this.props.projects.map((element, index) => {
                        return (
                            <div>
                                <a href={`/portfolio/${element._id}`}>{element.name}</a>
                                <img src={element.img} alt={element.name}/>
                            </div>
                        )
                    })
                }
                </div>
            </Layout>
        )
    }
}

module.exports = Index;