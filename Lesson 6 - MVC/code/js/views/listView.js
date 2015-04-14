UAM.ListView = function(element) {

    var _this = this;

    this.taskList = element;
    UAM.EventEmitter.call(this);

    this.createTaskDiv = function(id, task) {
        var taskDiv = document.createElement('a');

        taskDiv.setAttribute('id', id);
        taskDiv.setAttribute('class', task.isActive ? 'item active' : 'item inactive');
        taskDiv.innerHTML = task.content;

        taskDiv.onclick = function () {
        	task.isActive = !task.isActive;
        	_this.emit('taskStateChange', {
        		id: id,
        		task: task
        	});
        };

        return taskDiv;
    };
};

UAM.utils.inherits(UAM.EventEmitter, UAM.ListView);

UAM.ListView.prototype.updateTaskList = function(data) {

	var _this = this;
	_this.taskList.innerHTML = '';

    data.forEach(function(task, index) {
        _this.taskList.appendChild(_this.createTaskDiv(index, task));
    });
};
