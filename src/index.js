module.exports = function check(str, bracketsConfig) {
  let iArr;
  if (str.length % 2 != 0){
    return false;
  }
  for (iArr = 0; iArr < bracketsConfig.length; iArr++){
    let br1 = bracketsConfig[iArr][0];
    let br2 = bracketsConfig[iArr][1];
    while (str != '' & str.includes(br1,0) ){
      console.log('str '+ str);
       let i = 0;
    
          posb1 = str.indexOf(br1,i);
          posb2 = str.indexOf(br2,i);
          

          if ((str[posb1] == br1 & str.length > 4 ) || (str.length <= 4 & ((posb2 - posb1) != 2) & ((posb2 - posb1) > 0)) || (str.length == 2 & str[0] == br1 & str[i+1] == br2)) {
            posb2 = str.indexOf(br2,i);
            
              if (br1 != br2){
                str = str.slice(0,posb1) + str.slice(posb1+1,posb2) + str.slice(posb2+1,);
              }  else {
                str = str.slice(0,posb1) + str.slice(posb1+1,);
                str = str.slice(0,posb2) + str.slice(posb2+1,)
              }   
             
          } else {
            
            return false;
          }
        
  }
}
return true;
}
