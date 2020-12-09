const React = require('react');
const Layout = require('./Layout/Layout.jsx')

class Show extends React.Component {
    render () {
        const project = this.props.project;
        return (
            <Layout
            title="edit">
                <div className="show-box">
                    <h1 className="show-title">{`${project.name}'s Page`}</h1>
                    <p>{project.description}</p>
                    <a href={project.git}>git link</a><br/>
                    <img src={project.img} alt=""/><br/>
                    <div className="edit-delete-buttons">
                        <a href={`/portfolio/${project._id}/edit`}>edit this entry</a> <form method="POST" action={`/portfolio/${project._id}?_method=DELETE`}>  <input type="submit" value={`delete ${project.name}`}/></form>
                    </div>
                </div>
            </Layout>
        )
    }
}

module.exports = Show;