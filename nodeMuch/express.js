var express = require('express')
var app = express()

var asyncIO = function(cb) {
    setTimeout(function() {
        cb()
    }, 2000);
}

// var mid = function(req, res, next) {
//     console.log('mid')
//     req.body = 'mark'
//     console.log(req.body)
//     next()
//     console.log('mid next')
//     console.log(req.body)
//     res.send(req.body + ' done')
// }
// app.use(mid)

// app.use(function(req, res, next) {
//     asyncIO(function() {
//         console.log('end')
//         req.body += ' saved'
//         console.log(req.body)
//         next()
//         console.log('end next')
//         console.log(req.body)
//     })
// })


var mid = function(req, res, next) {
    console.log('mid')
    req.body = 'mark'
    console.log(req.body)
    next()
    console.log('mid next')
    console.log(req.body)
}
app.use(mid)

app.use(function(req, res, next) {
    asyncIO(function() {
        console.log('end')
        req.body += ' saved'
        console.log(req.body)
        res.send(req.body + ' done')
        console.log('end next')
        console.log(req.body)
    })
})

// app.use(function(req, res, next) {
//     console.log('end2')
//     req.body += ' saved'
//     console.log(req.body)
//     next()
//     console.log('end2 next')
//     console.log(req.body)
// })

app.listen(3000)