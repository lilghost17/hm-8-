// 1 დავალება 

function asyncFunciontAfterDelay(delay) {
    return new Promise (resolve => setTimeout(resolve,delay))
}
async function asyncFunc() {
    console.log("async function has started")

try {
    await asyncFunciontAfterDelay(1000)
    console.log('1 second passed')

    await asyncFunciontAfterDelay(2000)
    console.log('2 seconds passed')
} catch(err){
    console.log.error(err)
}
} 
asyncFunc()


