function priceWithMonthlyDiscount(ratePerHour, numDays, discount) {
    let numOfMoths = Math.floor(numDays / 22);
     let montlyRate = 22 * dayRate(ratePerHour);
     let montlyDiscountRate = montlyRate * (1 - discount) 
   
     let extraDays = numDays % 22;
     let extraDaysRate = extraDays * dayRate(ratePerHour);
   
     return Math.ceil( numOfMoths * montlyDiscountRate + extraDaysRate);
   }