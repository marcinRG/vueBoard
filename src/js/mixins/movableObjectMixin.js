export const movableObjectMixin = {
    data() {
        return {
            maxValue: 0,
            position: 0,
            direction: 1,
            step: 2
        }
    },
    methods: {
        move() {
            if (this.direction === 1 && this.position >= this.maxValue) {
                this.direction = -1;
            }
            if (this.direction === -1 && this.position <= 0) {
                this.direction = 1;
            }
            this.position = this.position + this.direction * this.step;
        }
    }
}