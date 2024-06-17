function frequencyCounter(arr) {
    return arr.reduce(function(acc, next) {
        acc[next] = (acc[next] || 0) + 1;
        return acc
    }, {})
}

function mode(arr) {
    let freqCount = frequencyCounter(arr)

    let count = 0
    let mostFreq;

    for (let key in freqCount) {
        if (freqCount[key] > count) {
            mostFreq = key
            count = freqCount[key]
        }
    }
    return +mostFreq
}

function validateNums(numsString) {
    let result = []

    for (let i = 0; i < numsString.length; i++) {
        let valToNumber = Number(numsString[i])

        if (Number.isNaN(valToNumber)) {
            return new Error(`Not a valid number: ${numsString[i]}`)
        }
        result.push(valToNumber)
    }
    return result
}


function mean(nums) {
    if(nums.length === 0) return 0
    return nums.reduce(function (acc, cur) {
        return acc + cur
    }) / nums.length
}

function median(nums) {
    nums.sort((a, b) => a - b)
    let middleIndex = Math.floor(nums.length / 2)
    let mid

    if (nums.length % 2 === 0) {
        mid = (nums[middleIndex] + nums[middleIndex - 1]) / 2
    } else {
        mid = nums[middleIndex]
    }
    return mid
}

module.exports = {
    frequencyCounter,
    mean,
    median,
    mode,
    validateNums
}