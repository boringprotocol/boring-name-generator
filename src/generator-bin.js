#!/usr/bin/env node

const generate = require('./generator')
const program = require('commander')

program
    .version('1.0.0')
    .option('-w, --words [num]', 'number of words [2]', 2)
    .option('-n, --numbers', 'use numbers')
    .option('-a, --alliterative', 'use alliterative')
    .option('-o, --output [output]', 'output type [raw|dashed|spaced]', /^(raw|dashed|spaced)$/i)
    .parse(process.argv)

let boring_name = generate({words: program.words, number: program.numbers, alliterative: program.alliterative});

if (program.output == "dashed"){
    console.log(boring_name.dashed);
} else if (program.output == "raw") {
    console.log(boring_name.raw);
} else if (program.output == "spaced") {
    console.log(boring_name.spaced);
} else {
    console.log(boring_name);
}
