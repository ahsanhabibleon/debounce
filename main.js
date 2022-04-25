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
    const debouncedHandleResize = debounce(() => {
      setWindowWidth(window.innerWidth);
    }, 500);
    debouncedHandleResize();
    window.addEventListener("resize", debouncedHandleResize);
    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);
