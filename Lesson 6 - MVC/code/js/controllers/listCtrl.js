ListCtrl = function (listView, store) {
	store.on('updateTaskList', function(data) {
		listView.updateTaskList(data);
	});

	listView.on('taskStateChange', function(data) {
		store.update(data.id, data.task);
	});
};
