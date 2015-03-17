(function (global) {
	if (!global.UAM) {
		global.UAM = {};
	}

	function newObject() {
		var newInstance = {};
		var args = Array.prototype.slice.call(arguments, 1);
		var func = arguments[0];
		newInstance.__proto__ = (Object(func.prototype) === func.prototype ? func.prototype : Object.prototype);
		var constructorReturns = func.apply(newInstance, args);
		return constructorReturns instanceof Object ? constructorReturns : newInstance;
	}

	global.UAM.newObject = newObject;
}(window));

/*
	Zaimplementuj funkcję newObject, która będzie działać analogicznie do operatora new. Pierwszym parametrem funkcji niech będzie
	konstruktor, natomiast pozostałe to parametry konstruktora. Przykładowe zastosowanie:

	new MyClass(arg1, arg2) -> newObject(MyClass, arg1, arg2)
*/


