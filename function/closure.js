function formatDuration (seconds) {
  if(seconds === 0) return 'now';
  
  const outSec = seconds % 60;
  const getMin = (seconds - outSec) / 60;
  const outMin = getMin > 60 ? getMin % 60 : getMin;
  const getHour =  (getMin - outMin) / 60;
  const outHour = getHour > 24 ? getHour % 60 : getHour;
  const getDay = (getHour - outHour) / 365;
  const outDay = getDay > 365 ? getDay % 365 : getDay;
  const getYear = (getDay - outDay) / 365;

console.log(outHour, outMin, outSec)

  function getElem(type, multip) {}


  function output(num, type) {
    return num > 1 
      ? `${num} ${type}s`
      : `1 ${type}`;
  }

  
}


console.log(formatDuration(62));