const core = require('@actions/core');
const github = require('@actions/github');

let octokit;

const listComments = async () => {};

const createComment = async () => {};

const updateComment = async () => {};

const getUniqueComment = async () => {};

const main = async () => {
    const token = core.getInput('token');
    const uniqueIdentifier = `[^uniqueIdentifier] ${core.getInput('uniqueIdentifier')}`;
    const body = core.getInput('body');

    const { owner, repo } = github.context.repo;
    const issueNumber = github.context.issue.number;

    console.log(
        '==main',
        JSON.stringify({
            token,
            uniqueIdentifier,
            body,
            owner,
            repo,
            issueNumber,
        }),
    );

    octokit = github.getOctokit(token);
};

main();
