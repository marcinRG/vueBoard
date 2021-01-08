import Vue from 'vue/dist/vue';

export const customList = new Vue({
    el: '#custom-list',
    data: {
        elements: [
            'lorem ipsum',
            'something else',
            'other element',
        ]
    }
});