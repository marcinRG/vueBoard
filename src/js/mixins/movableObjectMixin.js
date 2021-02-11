export const movableObjectMixin = {
    data() {
        return {
            direction: 1,
            step: 2
        }
    },
    methods: {
        move() {
            if (this.direction === 1 && this.position >= this.max) {
                this.direction = -1;
            }
            if (this.direction === -1 && this.position <= 0) {
                this.direction = 1;
            }
            this.position = this.position + this.direction * this.step;
        }
    }
}