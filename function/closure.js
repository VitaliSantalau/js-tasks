// function formatDuration (seconds) {
//   if(seconds === 0) return 'now';

//   const getSec = seconds % 60;
//   const getMin = Math.floor(seconds % 3600 / 60);
//   const getHour = Math.floor(seconds % (3600*24) / 3600);
//   const getDay = Math.floor(seconds / (3600*24)) % 365;
//   const getYear = Math.floor(seconds / (3600*24*365));

//   function output(num, type) {
//     return num > 1 ? `${num} ${type}s` : `1 ${type}`;
//   }

//   const sec = getSec > 0 ? output(getSec, 'second') : 0;
//   const min = getMin > 0 ? output(getMin, 'minute') : 0;
//   const hour = getHour > 0 ? output(getHour, 'hour') : 0;
//   const day = getDay > 0 ? output(getDay, 'day') : 0;
//   const year = getYear > 0 ? output(getYear, 'year') : 0;

//   const arr = [year, day, hour, min, sec].filter(elem => elem !== 0);
//   const getStr = arr.length > 1 ? arr.join(', ') : arr[0];
//   const index = getStr.lastIndexOf(',');

//   return  index >=0 ? `${getStr.slice(0, index)} and${getStr.slice(index+1)}` : getStr;
// }

// function myLanguages(results) {
//   return Object.entries(results).filter(([, value]) => value >= 60).sort(([, valueA], [, valueB]) => {
//     return valueA >= valueB ? -1 : 1;
//   }).reduce((acc, [key, ]) =>  {
//     acc.push(key);
//     return acc;
//   }, []);
// }

// var runLengthEncoding = function(str){
//   if(str.length === 0) return [];

//   const arr = [];
//   const strArr = str.split('');
//   let subArr = [1, strArr[0]];

//   for(let i = 1; i < strArr.length; i++) {
//     if(strArr[i] === strArr[i-1]) {
//       subArr[0] += 1;
//     } else {
//       arr.push(subArr);
//       subArr = [1, strArr[i]]
//     }
//   }
//   arr.push(subArr);
//   return arr;

// }

var WordDictionary = function () {
  this.dictionary = new Set();
};

WordDictionary.prototype.addWord = function (word) {
   this.dictionary.add(word)
};

WordDictionary.prototype.search = function (word) {
  const arrWord = word.split('');
  const regexp = /b/;
  // return this.dictionary.has(regexp)
  for(let value of this.dictionary) {
    if(value.match(regexp)) return true;
    return false;
  }
};

var wd = new WordDictionary();
  wd.addWord('a');
  wd.addWord('at');
  wd.addWord('ate');
  wd.addWord('ear');

console.log(wd.search('a'));


// wd.search('a.e')