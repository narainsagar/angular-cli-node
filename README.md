#angular2-cli-node

This is a starter repo for setting up Angular2 with Node + Express. Purpose for such a starter is to have both client and server in the same repo and the server serving the client (so we do not need nginx or apache.

The setup itself was straight forward enough, just a few adjustments needed:
- Node should use the `client/dist` as a public directory
- Node should redirect to index.html for all links except those going to API
- Hardcode (to be fixed) url for ember-cli-live-reload to node

TODOs:
- Fix the hardcoded route for ember-cli-live-reload
- Add testing for server
- Setup proper API example with Service
- Deployment documentation (may be add anisble script)