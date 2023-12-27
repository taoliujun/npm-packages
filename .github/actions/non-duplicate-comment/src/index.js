import core from '@actions/core';
import github from '@actions/github';

console.log('hello non-duplicate-comment');
console.log(`github info ${github.context.issue.number}`);
