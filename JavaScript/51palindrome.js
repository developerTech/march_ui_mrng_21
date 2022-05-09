1221
12321
123421

let palindrome = (data) => {
    let rem,temp,final = 0;
    temp = data;
    while(data > 0 ){
        rem = data%10;
        data = parseInt(data/10);
        final = final*10+rem
    }
    if(final == temp){
        console.log(`Number ${temp} is palindrome`)
    }else{
        console.log(`Number ${temp} is not a palindrome`)
    }
}

palindrome(1221)
VM940:10 Number 1221 is palindrome
undefined
palindrome(12321)
VM940:10 Number 12321 is palindrome
undefined
palindrome(123421)
VM940:12 Number 123421 is not a palindrome