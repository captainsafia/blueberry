if (Meteor.isClient) {
    Template.signIn.events({
        "click .presenter-in": function(event) {
            event.preventDefault();
        },
        "click .audience-in": function(event) {
            event.preventDefault();
        }
    });
}
