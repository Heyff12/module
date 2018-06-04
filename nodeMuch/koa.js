var koa = require('koa')
var app = new koa()

var asyncIO = function() {
    return new Promise(function(resolve) {
        setTimeout(function() {
            resolve()
        }, 2000);
    })
}

var mid = function() {
    return function*(next) {
        console.log('mid')
        this.body = 'mark'
        console.log(this.body)
        yield next
        console.log('mid next')
        this.body += ' done'
        console.log(this.body)
    }
}

app.use(mid())

app.use(function*(next) {
    console.log('end')
    yield asyncIO()
    console.log('end yield')
    this.body += ' saved'
    console.log(this.body)
    yield next
    console.log('end2 yield')
    console.log(this.body)
})

app.listen(3000)