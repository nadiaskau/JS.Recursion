let fact = function(n){

    if(n == 1){
        return n;
    }
    if(n == 0){
        return 1; 
    }
    
    return n * fact(n-1); 
}

console.log(fact(5));

let fibo = function(n){

    if(n<=1){
        return n;
    }

    console.log(n);
    return  fibo(n-1) + fibo(n-2);
}

console.log('Fibo: ' + fibo(7));

let pow = function(r,e){
     
    if(e == 0){
        return 1; 
    }

    if(e == 1){
        return r; 
    }

    return r * pow(r,e-1);
}

console.log(pow(5,3));
