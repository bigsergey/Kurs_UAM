UAM.InputView = function(element) {
    var _this = this;

    this.textInput = element.querySelector('input');
    this.addButton = element.querySelector('.add-button');

    this.addButton.onclick = function () {
		_this.emit('addNewTaskClicked', (_this.textInput.value || 'New Task'));
		_this.textInput.value = '';
    };

    UAM.EventEmitter.call(this);
};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);

