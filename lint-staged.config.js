const config = {
  '*.{js,jsx,ts,tsx}': [
    `eslint --fix --ext js,jsx,ts,tsx`,
    `git add`,
  ],
  '*.{css,gql,graphql,htm,html,json,less,md,mdx,sass,scss,toml,yaml,yml}': [
    `prettier --write`,
    `git add`,
  ],
}

module.exports = config