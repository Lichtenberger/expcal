const express = require('express')

const app = express()

const {validateNums, mean, mode, median} = require('./helpers')

app.get('/mean', function(req, res, next) {
    if(!req.query.nums) {
        throw new ExpressError('Only valid numbers are allowed', 400)
    }
    let numsString = req.query.nums.split(',')
    let nums = validateNums(numsString)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message)
    }

    let result = {
        operation: 'mean',
        result: mean(nums)
    }

    return res.send(result)
})


app.get('/median', function(req, res, next) {
    if(!res.query.nums) {
        throw new ExpressError('Must be numbers', 400)
    }
    let numsString = req.query.nums.split(',')
    let nums = validateNums(numsString)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message)
    }

    let result = {
        operation: 'median',
        result: median()
    }
    return res.send(result)
})


app.get('/mode', function(req, res, next) {
    if (!req.query.nums) {
        throw new ExpressError('Must be numbers', 400)
    }
    let numsString = req.query.nums.split(',')
    let nums = validateNums(numsString)
    if (nums instanceof Error) {
        throw new ExpressError(nums.message)
    }

    let result = {
        operation: 'mode',
        result: mode(nums)
    }

    return res.send(result)
})

app.use(function(req, res, next) {
    const err = new ExpressError('Not found', 404)
    return next(err)
})

app.use(function(err, req, res, next) {
    res.status(err.status || 500)

    return res.json({
        error: err,
        message: err.message
    })
})

app.listen(3000, function() {
    console.log('App is running on 3000')
})