var todos = ["Buy New Turtle"];

var input = prompt("What would you like to do?");


while(input !== "quit"){

	if(input === "list"){		
		listTodos();
		
	}

	else if (input=== "new"){
		// ask for new todo
		addTodos();
	}

	else if(input==="delete"){
		deleteTodos();
	}



	input = prompt("What would you like to do?");

}

console.log("OK, YOU QUIT THE APP");




function listTodos(){
	console.log("********************");
	todos.forEach(function(todo, index){
			console.log(index + ": " + todo);

		});
	console.log("********************");
}


function addTodos(){
	var newTodo = prompt("Enter new todo: ");
		todos.push(newTodo);
		console.log("Added Todo");
}



function deleteTodos(){
	//ask for index of todo to be deleted

		var index = prompt("Enter index of todo to delete");

		//delete that todo
		//splice
		todos.splice(index, 1);
		console.log("Deleted Todo");
}