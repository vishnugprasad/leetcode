// debounce


function debounce(change, time ){
    let id;

return ()=>{
    if(id){
    clearTimeout(id)}
    id = setTimeout(()=>{change()}, time);
    
    
}

}








