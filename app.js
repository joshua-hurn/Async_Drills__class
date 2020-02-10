document.addEventListener('DOMContentLoaded', () => {
    // Timing Out //
    const logMsg = message => console.log(message);

    setTimeout(() => {
        logMsg('hello')
    }, 2000);

    const getWords = () => {
        console.log('instant');

        setTimeout(() => {
            logMsg('1')
        }, 1000);

        setTimeout(() => {
            logMsg('2')
        }, 2000);

        setTimeout(() => {
            logMsg('3')
        }, 3000);
    }

    getWords();

    // Callbacks and Recursion //
    const done = () => console.log("Job's done!");
    const countdown = (num, callback) => {
        if (num > 0) {
            console.log(num);
            setTimeout(() => {
                countdown(num - 1, callback);
            }, 1000);
        } else {
            done();
        }
    }

    countdown(4, done);

    // Promises, Promises ;) //
    let lunchTime = false;
    const orderMeSomeFood = (isLunchTime) => {
        return new Promise((resolve, reject) => {
            if (isLunchTime) {
                let lunch = {
                    lunch: "fried chicken",
                    drink: "sweet tea"
                }
                resolve(lunch);
            } else {
                let err = new Error("it's not lunchtime!");
                reject(err);
            }
        });
    }

    orderMeSomeFood(lunchTime)
        .then(res => console.log(res))
        .catch(err => console.log(err));
});
