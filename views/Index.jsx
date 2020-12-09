const React = require('react');
const Layout = require('./Layout/Layout.jsx')

class Index extends React.Component {
    render () {
        const project = this.props.projects
        return (
            <Layout
            title="Home Page">
                <h1>Projects</h1>
                <div className="index-project-area">
                    {
                    this.props.projects.map((element, index) => {
                        return (
                            <div className="index-projects">
                                <a href={`/portfolio/${element._id}`}>{element.name}</a>
                                <img src={element.img} alt={element.name} className="index-project-images"/>
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