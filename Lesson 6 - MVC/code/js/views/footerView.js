UAM.FooterView = function (element) {

	this.numberOfTask = element.querySelector('#numberoftask');
	this.numberOfActiveTask = element.querySelector('#numberofactivetask');

	UAM.EventEmitter.call(this);
};

UAM.utils.inherits(UAM.EventEmitter, UAM.FooterView);

UAM.FooterView.prototype.update = function(numberOfTask, numberOfActiveTask) {
	this.numberOfTask.innerHTML = numberOfTask;
	this.numberOfActiveTask.innerHTML = numberOfActiveTask;
};


