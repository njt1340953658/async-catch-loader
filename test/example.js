async function func() {
    await new Promise((resolve, reject) => {
        reject('抛出错误')
    })
}

async function test() {
    try {
        const res = await func();
    } catch (e) {
        console.log(e)
    }
}