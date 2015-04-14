InputCtrl = function(inputView, store) {
    inputView.on('addNewTaskClicked', function(newTaskText) {
    	store.add(newTaskText);
    });
};
