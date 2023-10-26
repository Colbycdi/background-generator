let arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20]
arraySort(arr);


function arraySort(arr) {
    arr.sort(function(a, b){
π        return a - b; 
    });
answer = arraySort(arr);    
console.log(answer);