const yaml = require('js-yaml');
const fs = require('fs');
const md = require("markdown-it")({
    html: false,
    breaks: true,
    linkify: true
});


function readFromFile(path) {
    let data = null;

    try {
        data = fs.readFileSync(path, 'utf8');
    } catch (e) {
        console.log(e);
    }

    return data;
}

function readYaml(path) {
    return yaml.safeLoad(readFromFile(path));
}

function readMarkdown(path) {
    return md.render(readFromFile(path));
}


module.exports = {
    projects: readYaml('data/projects.yml'),
    skills: readYaml('data/skills.yml'),
    aboutMe: readMarkdown('data/about_me.md')
};
