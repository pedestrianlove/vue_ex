import AssignmentListItem from './AssignmentListItem.js';
export default {
    components: {
        AssignmentListItem
    },
    template: `
        <section v-show="assignments.length">
            <h2 class="font-bold mb-2">
                {{ title }}
                <span>({{assignments.length}})</span>
            </h2>
            
            <div class="flex gap-2">
                <button 
                    v-for="tag in tags" 
                    class="border rounded px-1 py-px text-xs"
                    @click="currentTag=tag"
                    :class="{
                      'border-blue-500 text-blue-500': tag === currentTag
                    }"
                >{{ tag }}</button> 
            </div>
            

            <ul class="border border-gray-600 divide-y divide-gray-600 mt-5"
                v-for="assignment in filteredAssignments"
                :key="assignment.name"
            >
                <assignment-list-item :assignment="assignment"></assignment-list-item>

            </ul>
        </section>
    `,
    data() {
      return {
          currentTag: 'all',
      };
    },

    props: {
        assignments: Array,
        title: String,
    },

    computed: {
        filteredAssignments() {
            if(this.currentTag === 'all')
                return this.assignments;
            else
                return this.assignments.filter(a => a.tag === this.currentTag);
        },

        tags() {
            return ['all', ...new Set(this.assignments.map(a=>a.tag))];
        },
    }
}