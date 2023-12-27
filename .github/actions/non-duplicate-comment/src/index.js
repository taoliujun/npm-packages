// const core = require('@actions/core');
const github = require('@actions/github');

console.log('hello non-duplicate-comment');
console.log(`github info ${github?.context?.issue?.number}`);
