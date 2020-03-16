module.exports = function repeater(str, options) {
    let a;
    let b;
    
    if (options.addition || options.addition === false || options.addition === null) {
        b = options.addition;
        if (options.additionSeparator) {
            b = (b + options.additionSeparator).repeat(options.additionRepeatTimes-1) + options.addition;
            if (options.separator) {
                a = str + b;
                a = (a + options.separator).repeat(options.repeatTimes-1) + a;
            } else {
                options.separator = '+';
                a = str + b;
                a = (a + options.separator).repeat(options.repeatTimes-1) + a;
            }
            
        } else {
            if (options.separator) {
                a = str + b;
                a = (a + options.separator).repeat(options.repeatTimes-1) + a;
            } else {
                options.separator = '+';
                a = str + b;
                a = (a + options.separator).repeat(options.repeatTimes-1) + a;
            }
        }
    } else {
        if (options.separator) {
            a = (str + options.separator).repeat(options.repeatTimes-1) + str;
        } else {
            options.separator = '+';
            a = (str + options.separator).repeat(options.repeatTimes-1) + str;
        }
    }

    return a;
};
  