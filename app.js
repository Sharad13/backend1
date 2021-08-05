
const EventEmitter=require("events")
const eventEmitter=new EventEmitter()

const {pressed1,pressed2,pressed3}=require("./pressed")

eventEmitter.on("clicked1",pressed1)

const r=require("readline")

const readline=r.createInterface({
    input:process.stdin,
    output:process.stdout
})

async function rept(){
readline.question("choose between 1,2 & 3:",function(num){
    if(num==1){
        eventEmitter.emit("clicked1")
        return rept()
    }
    else if(num==2)
    {
        readline.question("add another book:",function(bk){
        console.log(`${bk} added successfully`)
        return rept()
    })
     }
    else if(num==3){
        readline.question("Are you sure you want to quit - press Y to quit:",function(ans){
        if(ans=="Y")console.log("Bye Bye")
        return rept()

    })
    }
    else console.log("You have selected an invalid entry so please press 1, 2 or 3")
})

}
rept()