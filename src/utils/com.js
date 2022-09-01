export function debounce(func, wait=0) {   
    if (typeof func !== 'function') {
　　　  throw new TypeError('need a function arguments')
    }  
    let timeid = null
    let result
　　 return function() {
        let context = this
        let args = arguments
        if (timeid) {
    　　　　　clearTimeout(timeid);   
        }
        timeid = setTimeout(function() {
    　　　　　result = func.apply(context, args)
        }, wait)
　　　　 return result
　　 }
}