import AssignmentList from './AssignmentList.js'
export default {
    components: {
        AssignmentList,
    },

    template: `
      <section class="space-y-6">
        <assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>
        <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>
      
        <form @submit.prevent="add">
          <div class="border border-gray-600 text-black">
            <input 
                type="text" 
                placeholder="New assignment..." 
                class="p-2"
                v-model="newAssignment"
            />
            <button type="submit" class="bg-white p-2 border-l">Add</button>
          </div>
        </form>
      </section>
    `,
    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: false},
                { name: 'Read Chapter 4', complete: false},
                { name: 'Turn in Homework', complete: false},
            ],
            newAssignment: '',
        };
    },

    computed: {
        completedAssignments() {
            return this.assignments.filter(assignment => assignment.complete);
        },

        inProgressAssignments() {
            return this.assignments.filter(assignment => !assignment.complete);
        },
    },

    methods: {
        add() {
            this.assignments.push({
                name: this.newAssignment,
                completed: false,
            });

            this.newAssignment = '';
        },
    },

}