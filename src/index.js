function sortByKey (arr, key) {
	return arr.sort(function(a,b) {
		let x = a[key];
		let y = b[key];
		return ((x < y) ? -1 : ((x > y) ? 1 : 0));
	});
}

new Vue({
  el: '#task-container',
  data: {
    tasks: []
  },
  methods: {
  	addTask: function() {
  		this.tasks.push({ summary: 'New Task', priority: 5, open:true, removed:false });
  	},
  	sortTasks: function() {
  		this.tasks = sortByKey(this.tasks, 'priority');
  	},
  	getPriorityClass(task){
  		return !task.open ? 'task-priority priority-done' : 'task-priority priority-' + task.priority;
  	},
  	nextPriority: function(task) {
  		if(task.open) {
  			task.priority = task.priority === 1 ? 5 : task.priority-1;
  		}
  	},
  	toggleTask(task) {
  		task.open = !task.open;
  	},
  	removeTask(task) {
  		task.removed = true;
  	}
  }
});