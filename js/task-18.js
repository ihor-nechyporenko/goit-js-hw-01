function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
    let message;
    // Пиши код ниже этой строки
    const totalPrice = pricePerDroid * orderedQuantity;
    
    if (customerCredits >= totalPrice) {
        message = `Вы купили ${orderedQuantity} дроидов, на счету осталось ${customerCredits - totalPrice} кредитов`;
    } else {
        message = 'Недостаточно средств на счету!';
    }
    // Пиши код выше этой строки
    return message;
}
  
console.log(makeTransaction(3000, 5, 23000));
console.log(makeTransaction(1000, 3, 15000));
console.log(makeTransaction(5000, 10, 8000));
console.log(makeTransaction(2000, 8, 10000));