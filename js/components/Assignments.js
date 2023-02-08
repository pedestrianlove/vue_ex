import AssignmentList from './AssignmentList.js';
import newAssignmentForm from './newAssignmentForm.js';
export default {
    components: {
        AssignmentList, newAssignmentForm
    },

    template: `
      <section class="space-y-6">
        <assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>
        <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>
      
        <new-assignment-form @add="add"></new-assignment-form>
      
      
      </section>
    `,
    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: false, tag: 'math'},
                { name: 'Read Chapter 4', complete: false, tag: 'math'},
                { name: 'Turn in Homework', complete: false, tag: 'science'},
            ],
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
        add(name) {
            this.assignments.push({
                name: name,
                completed: false,
            });

            name = '';
        },
    },

}