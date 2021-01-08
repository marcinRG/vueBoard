import Vue from 'vue/dist/vue';

export const buttonHandler = new Vue({
    el: '#button-handler',
    data: {
        textDisplay: 'some text',
        isUpperCase: false
    },
    methods: {
        changeTextCase: function () {
            if (!this.isUpperCase) {
                this.textDisplay = this.textDisplay.toUpperCase();
                this.isUpperCase = true;
            } else {
                this.textDisplay = this.textDisplay.toLowerCase();
                this.isUpperCase = false;
            }
        }
    }
});