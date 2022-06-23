module.exports = function toReadable (number) {
  if (number === 0) {return 'zero';}

  let result = '';
  let cent = (number - number % 100) / 100;
  let dec = ((number % 100) - number % 10) /10;
  let dig = number % 10;

  if (dec === 1) {
    switch (dig) {
        case 1:
            result = 'eleven';
            break;
        case 2:
            result = 'twelve';
            break;
        case 3:
            result = 'thirteen';
            break;
        case 4:
            result = 'fourteen';
            break;
        case 5:
            result = 'fifteen';
            break;
        case 6:
            result = 'sixteen';
            break;
        case 7:
            result = 'seventeen';
            break;
        case 8:
            result = 'eighteen';
            break;
        case 9:
            result = 'nineteen';
            break;
        case 0:
            result = 'ten';
            break;
      }
  }

  if (result == '') {
    switch (dig) {
        case 1:
            result = 'one';
            break;
        case 2:
            result = 'two';
            break;
        case 3:
            result = 'three';
            break;
        case 4:
            result = 'four';
            break;
        case 5:
            result = 'five';
            break;
        case 6:
            result = 'six';
            break;
        case 7:
            result = 'seven';
            break;
        case 8:
            result = 'eight';
            break;
        case 9:
            result = 'nine';
            break;
      }
  }

  switch (dec) {
    case 2:
        result = `twenty ${result}`;
        break;
    case 3:
        result = `thirty ${result}`;
        break;
    case 4:
        result = `forty ${result}`;
        break;
    case 5:
        result = `fifty ${result}`;
        break;
    case 6:
        result = `sixty ${result}`;
        break;
    case 7:
        result = `seventy ${result}`;
        break;
    case 8:
        result = `eighty ${result}`;
        break;
    case 9:
        result = `ninety ${result}`;
        break;
  }
  
  switch (cent) {
    case 1:
        result = `one hundred ${result}`;
        break;
    case 2:
        result = `two hundred ${result}`;
        break;
    case 3:
        result = `three hundred ${result}`;
        break;
    case 4:
        result = `four hundred ${result}`;
        break;
    case 5:
        result = `five hundred ${result}`;
        break;
    case 6:
        result = `six hundred ${result}`;
        break;
    case 7:
        result = `seven hundred ${result}`;
        break;
    case 8:
        result = `eight hundred ${result}`;
        break;
    case 9:
        result = `nine hundred ${result}`;
        break;
  }

  if (result.slice(-1) === ' ') {
    result = result.slice(0, result.length - 1);
  }

  return result;
}
