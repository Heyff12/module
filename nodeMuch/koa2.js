const Koa = require('koa')
const app = new Koa()
const asyncIO = () => {
    return new Promise(resolve => setTimeout(resolve, 2000))
}

const mid = () => async(ctx, next) => {
    console.log('mid')
    ctx.body = 'mark'
    console.log(ctx.body)
    await next()
    console.log('mid next')
    ctx.body += ' done'
    console.log(this.body)
}

app.use(mid())

app.use(async(ctx, next) => {
    console.log('end')
    await asyncIO()
    console.log('end yield')
    ctx.body += ' saved'
    console.log(ctx.body)
    await next()
    console.log('end2 yield')
    console.log(ctx.body)
})

app.listen(3000)