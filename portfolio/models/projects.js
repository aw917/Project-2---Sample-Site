const { urlencoded } = require('mongoose');
const mongoose = require('mongoose');

const projectsSchema = new mongoose.Schema ({
    name: { type: String, required: true },
    description: { type: String, required: true },
    git: { type: String, required: true },
    img: { type: String, required: true }
})

// Data:
const projects = [
    {
        name: 'Go Game',
        description: 'Re-made the oldest strategy game of all time.',
        git: 'https://github.com/aw917/aw917',
        img: 'https://img1.etsystatic.com/135/0/12704570/il_570xN.1045532149_pf0a.jpg'
    }
]

const Project = mongoose.model('Project', projectsSchema);

// Add data with the below function
//      Commented out due to issue
// Project.create(projects);

module.exports = projects;
module.exports = mongoose.model('Project', projectsSchema);