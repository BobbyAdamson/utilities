class Timer {
    constructor(props) {
        this.history = [];
        this.direction = props && props.direction ? props.direction : "ascending";
        this.useTemplate = props && props.useTemplate === true;
        this.time = {h: 0, m: 0, s: 0};
        this.isPaused = false;
        this.interval;
    }

    // Starts the timer
    initialize() {
        this.interval = setInterval(function() {
            if(!this.isPaused) {
                if(this.time.s === 59) {
                    this.time.s = 0;
                    if(this.time.m === 59) {
                        this.time.m = 0;
                        this.time.h++;
                    } else {
                        this.time.m++;
                    }
                } else {
                    this.time.s++
                }
            }
        }.bind(this), 1000);
    }

    applyInitialState() {
        this.time = {h: 0, m: 0, s: 0};
        this.isPaused = false;
        this.interval;
    }

    // Pause features
    pause() { 
        this.isPaused = true; 
        return this; 
    }

    unpause() { 
        this.isPaused = false; 
        return this;
    }

    togglePause() { 
        this.isPaused = !this.isPaused; 
        return this;
    }

    restart(save) {
        clearInterval(this.interval);
        save && this.preserveCurrentState();
        this.applyInitialState();
        return this;
    }

    preserveCurrentState(id = this.history.length + 1) {
        this.history.push({
            id: id,
            saved: new Date, 
            time: this.time,
        });

        return this;
    }

    reset() {
        this.time = {h: 0, m: 0, s: 0};
        this.isPaused = false;
    }

    get Time() {
        return this.time;
    }

    get TimeString() {
        return `${this.time.h ? this.time.h + ':' : ''}${this.time.m ? this.time.m + ':' : '00:'}${this.time.s ? ('0' + this.time.s).slice(-2) : '00'}`;
    }

    get TotalSeconds() {
        return this.time.h * 3600 + this.time.m * 60 + this.time.s;
    }

    render() {
        const 
            timeString = this.TimeString,
            template = `
                <div class="xTimerContainer">
                    <p class="xMeta xMetaCountdown"><span class="xMetaLabel">Countdown:</span><span class="quizTimer xMetaValue">${timeString}</span></p>
                </div>`,
            container = document.createElement('div');

        container.classList.add('xQuizHeader');
        container.innerHTML = template;

        return container;
    }
}

export default Timer;