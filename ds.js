
// function ans (ar,target){
//     var sorted = ar.sort((a,b) => { return (a-b)});
//     var len = sorted.length;
//     console.log(sorted);
//     var arr =[]

//     for(i=0 , j= len-1; i< j;){
//         console.log(sorted[i],sorted[j]);
//         if((sorted[i]+sorted[j])/2 === target){
//                    arr.push( [sorted[i] , sorted[j]])
//                    i++
//         }
//         else if ((sorted[i]+sorted[j])/2 >target){
//             j--
//         }

//         else {
//             i++
//         }

        
//     }
//     return arr;



// }

// console.log(ans(arr,avg));   


// var arr = [1,4,2,4,3,6,7,8];
// var avg = 4;

// function check (item,target){
    
//     let len = item.length;
//     var obj = {};
//     var elem = [];
//     for(i=0; i<len-1; i++){
//         if(obj[(2*target - item[i])]){
//             elem.push([item[i],obj[(2*target - item[i])]])
//         }
//         obj[ item[i]] = item[i]
        
//     }
//     return elem
// }

// console.log(check(arr,avg));


var str = "vishnu"
var news = str.split("")
news = new Map()
console.log(news);