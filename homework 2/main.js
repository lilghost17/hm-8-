// 2 დავალება 

const mySetTimeout = (delay) => new Promise(resolve => setTimeout(resolve, delay));

function makeToys(numToys, makeTime, deliverTime, sellTime) {
    let madeToys = 0;
    console.log("სათამაშოები მზადდება");
    mySetTimeout(makeTime)
    .then(() => {
        madeToys = numToys;
        console.log('მზადაა ${madeToys} სათამაშო');
        return mySetTimeout(deliverTime);
    })
    .then(() => {
        console.log('მიტანილია ${madeToys} სათამაშო');
        return mySetTimeout(sellTime);
    })
    .then(() => {
        console.log('გაიყიდა ${madeToys} სათამაშო');
    })
    .catch((err) => {
        console.error('შეცდომა ${err}');
    });
}

makeToys(10, 3000, 2000, 1000);


// 2 ვარიანტი

const mySetTimeout = (delay) => new Promise (resolve => setTimeout(resolve,delay));

async function makeToys(numToys, makeTime, deliverTime, sellTime) {
    try {
    let madeToys = 0;
    console.log("სათამაშოები მზადდება");
    await mySetTimeout(makeTime)
    madeToys = numToys;
    console.log('მზადაა ${madeToys} სათამაშო');
    await mySetTimeout(deliverTime);
    console.log('მიტანილია ${madeToys} სათამაშო');
    await mySetTimeout(sellTime);
    console.log('გაიყიდა ${madeToys} სათამაშო');
    } catch (err) {
    console.error(err);
    }
}
makeToys(10,3000,2000,1000);