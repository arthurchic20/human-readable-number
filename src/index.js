const arrNumbers = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine'
   ];

const arrTeen = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen'
   ];

const arrDozent = [
    '',
    'ten',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety'
];

const arrZeroDigits = ['', 'thousand', 'million', 'billion', 'billiard', 'trillion']


const arrSize = 3; 
const subArr = [];


module.exports = function toReadable (myNumber) {
    // toReadable = (myNumber) => { 
    let arrFromMyNumber =  Array.from(String(myNumber));

    let reversArr = arrFromMyNumber.reverse();

    for (let i = 0; i < Math.ceil(reversArr.length/arrSize); i++){
        subArr[i] = reversArr.slice((i*arrSize), (i*arrSize) + arrSize).reverse();
    }

    let normalSubArr = subArr.reverse();
    
    normalSubArr.forEach(function(elem, index){
        // console.log(normalSubArr);
        if (elem.length === 3) {

            if (+elem[0] === 0) {
                    
                    if (+elem[2] === 0 ) { 
                        if (elem[1] === 0 ) {
                            elem[0] = '' ;
                            elem[1] = '' ;
                            elem[2] = '' ;
                        } else if (elem[1] != 0){
                            elem[0] = '' ; ;
                            elem[1] = arrDozent[+elem[1]]
                            elem[2] = '' ;
                        }else {
                            elem[0] = '' ; ;
                            elem[1] = '' ; ;
                            elem[2] = '' ; ;
                        }

                    } else if (+elem[1] === 0) {

                        elem[0] = '' ;
                        elem[1] = '' ;
                        elem[2] = arrNumbers[+elem[2]]

                    } 

                    if (+elem[1] === 0 ) {
                        if (elem[2] === 0 ) {
                            elem[0] = '' ; ;
                            elem[1] = '' ; ;
                            elem[2] = '' ; ;
                        } else {
                            elem[0] = '' ; ;
                            elem[1] = '' ; ;
                            elem[2] = arrNumbers[elem[2]]
                        }
                }
            }
            if ( +elem[1] > 1) {

                if ((+elem[2] === 0) && ((+elem[0] > 0) && (elem[1] > 0))) {
                    elem[0] = arrNumbers[[elem[0]]] + ' hundred';
                    elem[1] = arrDozent[elem[1]];
                    elem[2] = '' ;
                } else {
                    elem[0] = arrNumbers[[elem[0]]] + ' hundred';
                    elem[1] = arrDozent[elem[1]];
                    elem[2] = arrNumbers[elem[2]];
                }

            } else if (+elem[1] === 1) {
                elem[0] = arrNumbers[[elem[0]]] + ' hundred';
                elem[1] = '' ;
                elem[2] = arrTeen[elem[2]];

            } else if (+elem[2] === 0) {
                elem[0] = arrNumbers[[elem[0]]] + ' hundred';
                elem[1] = arrDozent[elem[1]];
                elem[2] = '' ;

            } else if (+elem[1] === 0) {
                elem[0] = arrNumbers[[elem[0]]] + ' hundred';
                elem[1] = '' ;
                elem[2] = arrNumbers[elem[2]];
            } 
            
        
        } else if ((elem.length === 2)) {

            if (+elem[1] === 0) {
                elem[0] = arrDozent[elem[0]];
                elem[1] = '' ;

            } else if (+elem[0] === 0) {
                elem[0] = '' ;
                elem[1] =arrNumbers[elem[1]]
            
            } else if (+elem[0] === 1) {
                elem[0] = '' ;
                elem[1] = arrTeen[+elem[1]];

            } else {
                elem[1] = arrNumbers[+elem[1]]
                elem[0] = arrDozent[+elem[0]];
            }

        } else {
            elem[0] = arrNumbers[elem[0]]
        }

        if (normalSubArr.length > 1 && (+elem[0] != 0) && (+elem[1] != 0) && (+elem[2] != 0)) {
            elem.push(arrZeroDigits[normalSubArr.length-index-1])
        }
    })
    
    // console.log(normalSubArr);

    let result =  Array.from(normalSubArr.join(' '));

    // console.log(result);
    
    for (let i = 0; i < result.length; i++) {
        if (result[i] === ',') {
            result[i] = ' '  
        }
        if (result[result.length - 1] === ',') {
            result.splice((result.length - 1), 1)
        }
    }
    
    for (let i = 0; i < result.length; i++) {
        if (result[i] === ' ' && result[i+1] === ' ') {
            result.splice(i, 1);
            i --;
            result.length;
        }
        if (result[0] === ' ' ) {
            result.splice(0,1)
        }
        if (result[result.length - 1] === ' ') {
            result.splice((result.length - 1), 1)
        }
    }
    // console.log(result)


    return result.join('')
    
}

// console.log(toReadable(900));
