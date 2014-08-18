if (Meteor.isClient) {
  Template.hello.greeting = function () {
    return "Welcome to posthooks.";
  };

  Template.hello.events({
    'click input': function () {
      // template data, if any, is available in 'this'
      if (typeof console !== 'undefined')
        console.log("You pressed the button");
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

Router.map(function() {
  this.route('hello', {path: '/'});

  this.route('hook', {
    path: '/hook',
    where: 'server',
    action: function() {

      // Watch the Meteor log to see this output
      console.log("Hook called.");
      console.log("Headers: ", this.request.headers);
      console.log("Data: ", this.request.body);

      this.response.writeHead(200, {'Content-Type': 'text/html'});
      this.response.write("You wrote: " + this.request.body.message);
      this.response.write("\n");

      // `this.response.end` *must* be called, or else the connection is left open.
      this.response.end('Success!\n');
    }
  });

});
