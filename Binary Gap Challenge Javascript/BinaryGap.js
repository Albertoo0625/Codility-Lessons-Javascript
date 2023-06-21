function Solution(N) {
    const binary=N.toString(2);
    console.log(binary);
    let maxgap=0;
    let counting=false;
    let currentLenght;
    

    for(let i=0;i<binary.length;i++){
        let digit=binary.charAt(i)
        if(digit=='1'){
         if(counting && currentLenght>maxgap){
             maxgap=currentLenght
            }
            counting=true;
            currentLenght=0;
        }else if (counting){
            currentLenght++
        }
    }


    console.log(maxgap);
    if (maxgap === 0) {
        return 0;
      }
    return maxgap 
}

Solution(1042);
Solution(15);