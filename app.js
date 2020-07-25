function checkMagazine(magazine, note) {
let bol = true;
    let magarr = magazine.split(' ');
    let notarr = note.split(' ');
    let magobj = {};
    let notobj = {};
    for(let i = 0; i < magarr.length; i++){
        if(magarr[i] in magobj){
            magobj[magarr[i]] = magobj[magarr[i]]+1   
        }else{
            magobj[magarr[i]] = 1
        }  
    }
    for(let i = 0; i < notarr.length; i++){
        if(notarr[i] in notobj){
            notobj[notarr[i]] = notobj[notarr[i]]+1   
        }else{
            notobj[notarr[i]] = 1
        }  
    }
    
    for(let key in notobj){
        if(key in magobj){
             if(magobj[key] >= notobj[key]){
                  bol = true 
              }else{bol = false;break} 
        }else{bol = false;break}  
    }
    
    if(bol == true){
        console.log('Yes')
    }else{
        console.log('No')
    }
}
