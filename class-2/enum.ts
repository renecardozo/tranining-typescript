enum Month {
  Jan=10,
  Feb,
  Mar,
  Apr,
  May,
  Jun,
  Jul,
  Aug,
  Sep,
  Oct,
  Nov,
  Dec
}

function isItWinter(month: Month) {
  let isWinter: boolean;
  switch (month) {
    case Month.Jun:
    case Month.Jul:
    case Month.Aug:
      isWinter = true;
      break;
    default:
      isWinter = false;
      break;
  }
  return isWinter;
}

(function(){
  console.log(isItWinter(Month.Jun));
  console.log(Month);
})();