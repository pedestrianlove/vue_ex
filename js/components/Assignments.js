import AssignmentList from './AssignmentList.js'
export default {
    components: {
        AssignmentList,
    },

    template: `
      <section class="space-y-6">
        <assignment-list :assignments="inProgressAssignments" title="In Progress"></assignment-list>
        <assignment-list :assignments="completedAssignments" title="Completed"></assignment-list>
      </section>
    `,
    data() {
        return {
            assignments: [
                { name: 'Finish project', complete: false},
                { name: 'Read Chapter 4', complete: false},
                { name: 'Turn in Homework', complete: false},
            ]
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

}