console.log("Відсоткове співвідношення парних чисел до непарних чисел = " + checkProbabilityTheory(10))

function checkProbabilityTheory(count) {
    let evenNumber = 0
    let oddNumber = 0

    for (let i = 0; i < count; i++) {
        let random = Math.random() * (1000 - 100 + 1) + 100;
        random = Math.floor(random);
        if (random % 2 == 0) {
            evenNumber += 1;
        }
        else {
            oddNumber += 1;
        }
    }

    let percentageEvenNumber = (evenNumber / count) * 100;
    let percentageOddNumber = (oddNumber / count) * 100;

    console.log("Кількість згенерованих чисел = " + count)
    console.log("Кількість парних чисел = " + evenNumber)
    console.log("Кількість непарних чисел = " + oddNumber)

    return percentageEvenNumber + "/" + percentageOddNumber
}

