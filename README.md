## What you like about your implementation

I felt the process was rushed, and the resulting code is quite complex to maintain. In the future, I would likely dedicate more time to developing a library before integrating it into the project.
I like that the code is modular and follows a clear structure, which makes it easier to maintain and extend. The use of TypeScript also helps with type safety and clarity in the codebase. The zoom feature adds a nice touch to the user experience, allowing users to focus on specific time periods. I chose Emotion to helps with dynamic styling.

## What you would change if you were going to do it again

I would spend more time on the initial design phase, possibly creating a more detailed prototype before implementation. This might involve more user testing and feedback to ensure the final product meets user needs effectively.

## How you made your design decisions. For example, if you looked at other timelines for inspiration, please note that

### Regarding UI:

- For the UI, I needed to add a zoom feature, so I took inspiration from Notion's timeline. My goal was to create something simple and fast.

### Regarding the project structure:

- For the project structure, I used MVVM. It's a pattern I'm very familiar with in my daily work, and it allows for easy maintenance.

## How you would test this if you had more time.

The project's architecture allows for very simple unit testing. I would also do some integration tests in use cases like inserting or deleting items from the timeline, and things like that.

## How to run the project

1. Clone the repository

```bash
git clone https://github.com/alexdlli/timeline
```

2. Install dependencies

```bash
  npm install || npm i
```

3. Start the development server

```bash
npm run dev
```
