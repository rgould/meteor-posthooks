Supporting web hooks in Meteor
======

See `posthooks.js` for example code.

To run:

1. `git clone git@github.com:rgould/meteor-posthooks.git`
1. `cd meteor-posthooks`
1. `mrt` (iron-router is required, so we use meteorite to start the app)

In a new terminal, make a request using `curl`:

* `curl -H "Content-Type: application/json" -d '{"message":"foo"}' http://localhost:3000/hook`
