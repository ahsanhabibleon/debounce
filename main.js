const debounce = (fn, ms) =>  {
    let timer
    return function() {
      clearTimeout(timer)
      timer = setTimeout(function() {
        timer = null
        fn.apply(this, arguments)
      }, ms)
    };
  }

  useEffect(() => {
      
    //debounced function
    const debouncedFunction = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 500);
      
      
    debouncedFunction();
    window.addEventListener("resize", debouncedFunction);
    return () => {
      window.removeEventListener("resize", debouncedFunction);
    };
  }, []);
