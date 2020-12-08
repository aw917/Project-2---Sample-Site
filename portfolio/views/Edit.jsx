const React = require('react');
const Layout = require('./Layout/Layout.jsx')

class Edit extends React.Component {
    render () {
        const project = this.props.projects;
        return (
            <Layout
            title="Edit Page">
                <div className="new-input-box">
                    <form action={`/portfolio/${project._id}?_method=PUT`} method="POST">
                        Name: <input type="text" name="name" value={project.name}/><br/>
                        Image: <input type="text" name="img" value={project.img}/><br/>
                        Description: <input type="text" name="description" value={project.description}/><br/>
                        Github Link: <input type="text" name="git" value={project.git}/><br/>
                        <input type="submit" name="" value="Update Project"/>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = Edit;