# Firebase function

Bare bones firebase function.

## Deploy the first time:

Create a project at [https://console.firebase.google.com/u/0/](https://console.firebase.google.com/u/0/)

Using firebase cli tools:
Make sure you're logged in:

```
firebase login
```

Set the project using

```
firebase use --project <project-id or alias>
```

Or update the `.firebaserc` file

Deploy using:

```
firebase deploy --only functions
```

## Setting up a project from scratch

To set up a project from scratch use

```
firebase init
```

## Docs

[Cloud function docs](https://firebase.google.com/docs/functions/)
