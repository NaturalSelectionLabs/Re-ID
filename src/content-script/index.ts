function querySelector(selector: string) {
    return <Promise<Element>>new Promise((resolve, reject) => {
        let result: Element | null;
        const interval = 200;
        let currentCount = 0;
        const maxCount = 10000 / interval;
        const getter = setInterval(() => {
            result = document.querySelector(selector);
            if (result) {
                clearInterval(getter);
                resolve(result);
            } else if (currentCount > maxCount) {
                reject();
            } else {
                currentCount++;
            }
        }, interval);
    });
}

querySelector('[data-testid="fileInput"]').then((ele) => {
    console.log(ele);
});
