function calculateTip(amount, rating) {

  let totalTipAmount = amount;
  let regexTerrible = /^terrible$/i;
  let regexExcellent = /^excellent$/i;
  let regexGreat = /^great$/i;
  let regexGood = /^good$/i;
  let regexPoor = /^poor$/i;
  
  console.log(totalTipAmount);
  console.log(rating);
  
  if(regexExcellent.test(rating)){
    totalTipAmount = Math.ceil(0.2 * amount);
  } else if(regexGreat.test(rating)){
    totalTipAmount = Math.ceil(0.15 * amount);
  } else if (regexGood.test(rating)){
    totalTipAmount = Math.ceil(0.1 * amount);
  } else if (regexPoor.test(rating)){
    totalTipAmount = Math.ceil(0.05 * amount);
  } else if (regexTerrible.test(rating)){
    return 0;
  } else {
    return "Rating not recognised";
  }
  
  return totalTipAmount;
}
