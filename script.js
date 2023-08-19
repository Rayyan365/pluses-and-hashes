// Good Luck 💪🏾
function countChrOccurence ('######+++++++###+') {
    let charMap = new Map();
    const count = 0;
     for (const key of str) {
      charMap.set(key,count); 
     }
   
     for (const key of str) {
       let count = charMap.get(key);
       charMap.set(key, count + 1);
     }
   
   
     for (const [key,value] of charMap) {
       console.log(key,value);
     }
   
   }  