module.exports = function(input) {
return `${
    input.components.map(element => {
        return `import { ${element}Component } from './${element}Component/${element}.component';\n`
    }).join('')
}
const components = angular
    .module('components',[])
    ${input.components.map((element, index) => {
        if(index == 0 && input.components.length == 1){
return `.component('${element}Component', ${element}Component)`
        } else if(index == 0){
return `.component('${element}Component', ${element}Component)\n`
        } else if(index == input.components.length - 1) {
return `\t.component('${element}Component', ${element}Component)`
        } else {
return `\t.component('${element}Component', ${element}Component)\n`
        }
    }).join('')}
    .name;

export default components;
`
}
