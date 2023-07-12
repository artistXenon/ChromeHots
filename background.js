const i = setInterval(() => {
    if (window === top) {
        window.addEventListener('keydown', ({ altKey, code, shiftKey }) => {
            const i = ((cd) => {
                const c = /^Digit(\d{1})$/.exec(cd);
                return (c && c[1] && !isNaN(c[1])) ? (parseInt(c[1]) - 1) : NaN;
            })(code);
            if (altKey && !isNaN(i)) chrome.runtime.sendMessage(undefined, 
                JSON.stringify(
                    {
                        key: i,
                        shift: shiftKey
                    }
                ))
        }, false);
        clearInterval(i);
    }    
}, 1000);
