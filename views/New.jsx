const React = require('react');
const Layout = require('./Layout/Layout.jsx')

class New extends React.Component {
    render () {
        return (
            <Layout
            title="Make new project page">
                <h1>New project</h1>
                <div className="new-input-box">
                    <form action="/portfolio" method="POST">
                        Name: <input type="text" name="name"/><br/>
                        Image: <input type="text" name="img"/><br/>
                        Description: <input type="text" name="description"/><br/>
                        Github Link: <input type="text" name="git"/><br/>
                        <input type="submit" name="" value="Create Project" id="new-submit-button"/>
                    </form>
                </div>
            </Layout>
        )
    }
}

module.exports = New;