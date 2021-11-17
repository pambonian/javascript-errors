const myEvalError = require('./errors/EvalError');
const myRangeError = require('./errors/RangeError');
// try
// {
//     check(2000)
// }
// catch(error)
// {
//     if (error instanceof RangeError)
//     {
//         console.log("range error successful!");
//     }
// }
const myReferenceError = require('./errors/ReferenceError');
const mySyntaxError = require('./errors/SyntaxError');
const myTypeError = require('./errors/TypeError');
const myURIError = require('./errors/URIError');
const myAggregateError = require('./errors/AggregateError');
const myInternalError = require('./errors/InternalError');
myInternalError.loop(1212);