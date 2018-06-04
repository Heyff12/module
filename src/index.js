const f = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('dev 命令测试' + 123);
        }, 2000);
    });
};

const testAsync = async() => {
    const t = await f();
    console.log(t);
};

testAsync();