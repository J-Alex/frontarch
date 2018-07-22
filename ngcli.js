var program = require('commander');
var fs = require('fs')
var path = require('path');

program
  .version('0.2.0')
  .command('createComponent [name]')
  .action(function(name){

    if(name === undefined){
      console.log('no args given')
    } else {
      console.log(name);
    
      var componentTemplate = require('./templates/component.js')(name);
      var controllerTemplate = require('./templates/controller.js')(name);
      var viewTemplate = `<h1>Vista: ${name}</h1>`

      fs.mkdir(path.join(__dirname, `/src/js/components/${name}Component`), function(err){
        if(err)throw err;
        console.log(`Folder ${name}Component created successfully!!`);
        fs.appendFile(`${__dirname}/src/js/components/${name}Component/${name}.component.js`, componentTemplate, (err)=>{
          if(err)throw err;
          console.log(`File: ${name}.component.js created successfully!!`);
        });
        fs.appendFile(`${__dirname}/src/js/components/${name}Component/${name}.ctrl.js`, controllerTemplate, (err)=>{
          if(err)throw err;
          console.log(`File: ${name}.ctrl.js created successfully!!`);
        });
        fs.mkdir(path.join(__dirname, `/public/partials/${name}`), function(err){
          if(err)throw err;
          console.log(`Folder ${name} created successfully!!`);
          fs.appendFile(`${__dirname}/public/partials/${name}/${name}.component.html`, viewTemplate, (err)=>{
            if(err)throw err;
            console.log(`File: ${name}.component.html created successfully!!`);
          });
        });
      });


      /*
          fs.readFileSync() or fs.readFile('', (err)=>{}) ... Sync or Async
      */
      let rawjson = fs.readFileSync('componentServices.json');
      let componentServices = JSON.parse(rawjson);

      componentServices.components.push(name);

      let processedData = JSON.stringify(componentServices, null, 2);
      fs.writeFileSync('componentServices.json', processedData);

      let processedJSON = JSON.parse(processedData);
      let componentModuleTemplate = require('./templates/componentModule.js')(processedJSON);
      
      fs.writeFile(`${__dirname}/src/js/components/components.module.js`, componentModuleTemplate, (err)=>{
          if(err)throw err;
          console.log(`File: /src/js/components/components.module.js has been updated successfully!!`);
      });

    }
  });
program
  .command('createService [name]')
  .action(function(name){
    if(name === undefined){
      console.log('no args given')
    }else{
      console.log(name);
      var serviceTemplate = require('./templates/service.js')(name);

      fs.appendFile(`${__dirname}/src/js/services/${name}.service.js`, serviceTemplate, (err)=>{
          if(err)throw err;
          console.log(`File: ${name}.service.js created successfully!!`);
      });
    }
  });
  