import AssignmentListItem from './AssignmentListItem.js';
export default {
    components: {
        AssignmentListItem
    },
    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">{{ title }}</h2>

            <ul v-for="assignment in assignments"
                :key="assignment.name"
            >
                <assignment-list-item :assignment="assignment"></assignment-list-item>

            </ul>
        </section>
    `,

    props: {
        assignments: Array,
        title: String,
    }
}