 export function debounce(fn, wait, immediate) {
  let timer;

  return (...args) => {
    timer&& clearTimeout(timer);

    if (immediate) {
     !timer&&fn(args)
     timer=setTimeout(() => {
      timer=null
    }, wait);

    } else {
      timer = setTimeout(()=>{
        fn(args)
      }, wait);
    }
  };
}
 

