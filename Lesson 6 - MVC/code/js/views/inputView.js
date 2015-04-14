UAM.InputView = function(element) {
    var _this = this;

    this.textInput = element.querySelector('input');
    this.addButton = element.querySelector('.add-button');

    var addNewTask = function() {
        _this.emit('addNewTaskClicked', (_this.textInput.value || 'New Task'));
        _this.textInput.value = '';
    };

    this.addButton.onclick = function() {
        addNewTask();
    };

    this.textInput.onkeypress = function(e) {
        e = e || window.event;
        if (e.keyCode == 13) {
            addNewTask();
        }
    }

    UAM.EventEmitter.call(this);
};

UAM.utils.inherits(UAM.EventEmitter, UAM.InputView);
