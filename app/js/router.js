Crack.Router.map(function() {
	this.resource('rooms', { path: '/'}, function(){
		this.resource('room', { path: ':room_id' }, function(){
		    this.route('chats');
	    });
	});
});

// Crack.Router.map(function(){
// 	this.resource('index'), function() {
// 		this.resource('chat', { path ':chat_id'});
// 	});


// 	// this.resource('todos', { path: '/' });
// });


Crack.RoomsRoute = Ember.Route.extend({
	model: function () {
		return rooms;
	}
});

Crack.RoomRoute = Ember.Route.extend({
    model: function (params) {
    	return rooms.findBy('id', params.room_id);
    }
});

Crack.RoomChatsRoute = Ember.Route.extend({
	model: function () {
		var room = this.modelFor('room');
		return messages;
	}
});



var rooms = [
{roomName: "General", id: 1},
{roomName: "Shit Talkin", id: 2}
];

var messages = [
{username: "Pat", message: "Hi", id: 1},
{username: "Lauren", message: "Yo", id: 2}
];





// Crack.IndexRoute = Ember.Route.extend({
// 	model: function() {
// 		return [];
// 	}
// });


// Todos.TodosRoute = Ember.Route.extend({
//   model: function() {
//     return this.store.find('todo');
//   }
// });



