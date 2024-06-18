// function checkForSpam(message) {
//     const spamWord1 = "spam"
//     const spamWord2 = "sale"
//     let lowerMessage = message.toLowerCase()
//     if ((lowerMessage.includes(spamWord1)) || (lowerMessage.includes(spamWord2))) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// TODO    вопрос для проверяющего: как лучше, с дополнительной переменной как выше написано
// TODO    или применить несколько методов подряд к одной переменной как в решении ниже?

function checkForSpam(message) {
    const spamWord1 = "spam"
    const spamWord2 = "sale"
    if ((message.toLowerCase().includes(spamWord1)) || (message.toLowerCase().includes(spamWord2))) {
        return true;
    }
    else {
        return false;
    }
}

console.log(checkForSpam("Latest technology news")); // false
console.log(checkForSpam("JavaScript weekly newsletter")); // false
console.log(checkForSpam("Get best sale offers now!")); // true
console.log(checkForSpam("Amazing SalE, only tonight!")); // true
console.log(checkForSpam("Trust me, this is not a spam message")); // true
console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!")); // true
console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
