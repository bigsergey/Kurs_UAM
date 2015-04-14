FooterCtrl = function (footerView, store) {

	store.on('updateTaskList', function (data) {
		var numberOfTask = data.length;
		var numberOfActiveTask = 0;
		data.forEach(function (task) {
			if (task.isActive) {
				numberOfActiveTask++;
			}
		});

		footerView.update(numberOfTask, numberOfActiveTask);
	});
};
