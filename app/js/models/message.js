Crack.Message = DS.Model.extend({
    username: DS.attr('string'),
    timestamp: DS.attr('date'),
    message: DS.attr('string')
});

Crack.Message.FIXTURES = [
{id: 1, username: "Pat", message: "Hi"},
{id: 2, username: "Lauren", message: "Yo"}
];