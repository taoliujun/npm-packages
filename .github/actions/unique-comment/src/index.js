const core = require('@actions/core');
const github = require('@actions/github');

const main = async () => {
    const token = core.getInput('token');
    const uniqueIdentifier = `[^uniqueIdentifier] ${core.getInput('uniqueIdentifier')}`;
    const body = `${core.getInput('body')}\n\n---\n\n${uniqueIdentifier}`;

    const { owner, repo } = github.context.repo;
    const issueNumber = github.context.issue.number;

    const octokit = github.getOctokit(token);

    const comments = await octokit.rest.issues.listComments({
        owner,
        repo,
        issue_number: issueNumber,
    });

    const botComment = comments.data.find((v) => v.body.includes(uniqueIdentifier));

    if (botComment) {
        await octokit.rest.issues.updateComment({
            owner,
            repo,
            comment_id: botComment.id,
            body,
        });
    } else {
        await octokit.rest.issues.createComment({
            owner,
            repo,
            issue_number: issueNumber,
            body,
        });
    }
};

try {
    main();
} catch (err) {
    core.setFailed(err.message);
}
