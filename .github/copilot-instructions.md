# Git Commit Message Instructions

You must generate commit messages following the Conventional Commits format strictly.

## Format

<type>(<optional-scope>): <short-description-in-imperative-mood>

[optional body describing the 'what' and 'why']

[optional footer(s)]

## Rules

- **Imperative Mood**: Use imperative mode for the subject line (e.g., "Add feature" not "Added feature" or "Adds feature").
- **Length**: Limit the subject line to 72 characters or fewer.
- **Casing**: The description must be completely lowercase and do not end with a period.
- **Spacing**: Separate the subject line from the body with exactly one blank line.
- **Body**: Limit body lines to 72 characters per line. Explain what problem your changes solve and why it solves them, rather than how the code implements it.

## Allowed Types

- `feat`: A new feature for the application.
- `fix`: A bug fix.
- `docs`: Documentation-only changes.
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc).
- `refactor`: A code change that neither fixes a bug nor adds a feature.
- `perf`: A code change that improves performance.
- `test`: Adding missing tests or correcting existing tests.
- `chore`: Changes to the build process or auxiliary tools and libraries such as documentation generation.
