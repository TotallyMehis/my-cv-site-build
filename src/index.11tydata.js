const yaml = require('js-yaml');
const fs = require('fs');


function readYaml(path) {
    let doc = null;
    
    try {
        doc = yaml.safeLoad(fs.readFileSync(path, 'utf8'));
    } catch (e) {
        console.log(e);
    }

    return doc;
}


module.exports = {
    projects: readYaml('data/projects.yml'),
    skills: readYaml('data/skills.yml')
};
