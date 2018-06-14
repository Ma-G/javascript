function checkPalindrome(inputString) {
    const inp = inputString;
    if (inp.length%2==0) {  
        var num = 0;
        for(var i = 0; i < inp.length/2; i++) {
            num++;
            var output =  inp[i] === inp[(inp.length-num)];
            
            if (!output) {
                return false; 
            } 
            
        }
                  

            return true;     
                
    } else {
        var num = 0;
        for(var i = 0; i < Math.floor(inp.length/2); i++) {
            num++;
            var output =  inp[i] === inp[(inp.length-num)];
            
            
            if (!output) {
                return false; 
            } 
            
        }
                  

            return true;    
    }
};
