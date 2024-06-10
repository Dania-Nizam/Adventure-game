#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer"
 
 
 class player{
    name:string
    fuel:number=100;
    constructor(name:string){
        this.name=name;
    }
    fuelDecrease(){
        let fuel =this.fuel -25
        this.fuel =fuel
    }
    fuelIncrease(){
        this.fuel=100
    }
}

class opponent {
    name:string;
   fuel :number=100;
    constructor(name:string){
        this.name=name;
    }
    fuelDecrease(){
        let fuel =this.fuel -25
        this.fuel =fuel
    }
    
}

let players = await inquirer.prompt([
    {
       name:"name" ,
       type:"input",
       message:"please enter your name",

    }
])



let opponents = await inquirer.prompt([
    {
        name:"select",
        type:"list",
        message:"select your opponent",
        choices:["skeleton","Assasin","zombie"]
    }
])

let p1 =new player(players.name)
let o1 =new opponent(opponents.select)

do{
    //skeleton
    if (opponents.select=="skeleton"){
    

    let ask = await inquirer.prompt([
        {
            type:"list",
            name:"opt",
            message:"select your opponent",
            choices:['Attack','Drink portion','Run for your life..']
        }
    ]);

    if (ask.opt=='Attack'){
        let num = Math.floor(Math.random()* 2)
    if(num>0){
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        }
        if(p1.fuel <= 0){
            console.log(chalk.red.bold.italic("you loose better luck next time"));
            process.exit()
        }

    if(num<=0){
        o1.fuelDecrease()
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if(o1.fuel <= 0){
            console.log(chalk.green.bold.italic("you win"));
            process.exit()
        }

        }
    
        }
    if(ask.opt =='Drink portion' ){
       p1.fuelIncrease()
       console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`));
       
        
        }
    if(ask.opt == 'Run for your life..'){
       console.log(chalk.red.bold.italic("you loose better luck next time"));
       process.exit()
        }
}

//assasin
if (opponents.select=="Assasin"){
    

    let ask = await inquirer.prompt([
        {
            type:"list",
            name:"opt",
            message:"select your opponent",
            choices:['Attack','Drink portion','Run for your life..']
        }
    ]);

    if (ask.opt=='Attack'){
        let num = Math.floor(Math.random()* 2)
    if(num>0){
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        }
        if(p1.fuel <= 0){
            console.log(chalk.red.bold.italic("you loose better luck next time"));
            process.exit()
        }

    if(num<=0){
        o1.fuelDecrease()
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if(o1.fuel <= 0){
            console.log(chalk.green.bold.italic("you win"));
            process.exit()
        }

        }
    
        }
    if(ask.opt =='Drink portion' ){
       p1.fuelIncrease()
       console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`));
       
        
        }
    if(ask.opt == 'Run for your life..'){
       console.log(chalk.red.bold.italic("you loose better luck next time"));
       process.exit()
        }
}

//zombie
if (opponents.select=="zombie"){
    

    let ask = await inquirer.prompt([
        {
            type:"list",
            name:"opt",
            message:"select your opponent",
            choices:['Attack','Drink portion','Run for your life..']
        }
    ]);

    if (ask.opt=='Attack'){
        let num = Math.floor(Math.random()* 2)
    if(num>0){
        p1.fuelDecrease()
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        }
        if(p1.fuel <= 0){
            console.log(chalk.red.bold.italic("you loose better luck next time"));
            process.exit()
        }

    if(num<=0){
        o1.fuelDecrease()
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if(o1.fuel <= 0){
            console.log(chalk.green.bold.italic("you win"));
            process.exit()
        }

        }
    
        }
    if(ask.opt =='Drink portion' ){
       p1.fuelIncrease()
       console.log(chalk.bold.italic.green(`you drink health portion your fuel is ${p1.fuel}`));
       
        
        }
    if(ask.opt == 'Run for your life..'){
       console.log(chalk.red.bold.italic("you loose better luck next time"));
       process.exit()
        }
}

}
while(true)
    