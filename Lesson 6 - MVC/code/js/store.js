UAM.Store = function () {
	UAM.EventEmitter.call(this);
	this.data  = [];
};

UAM.utils.inherits(UAM.EventEmitter, UAM.Store);

UAM.Store.prototype.add = function (data) {
	this.data.push({
		content: data,
		isActive: true
	});
	this.emit('updateTaskList', this.data);
};
UAM.Store.prototype.update = function (id, data) {
	this.data[id] = data;
	this.emit('updateTaskList', this.data);
};
