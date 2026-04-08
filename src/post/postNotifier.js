class PostMessage {
    constructor(from, type, value) {
        this.from = from;
        this.type = type;
        this.value = value;
    }
}

class PostNotifier {
    handlers = [];
    events = [];
    
    constructor() {
        const protocol = window.location.protocol === 'https:' ? 'wss' : 'ws';
        this.socket = new WebSocket(`${protocol}://${window.location.host}/post-notifier`);

        this.socket.onopen = (event) => {
            this.recieveEvent(new PostMessage('Tastymeals', 'connection', {msg: 'Connected'}));
        };
        this.socket.onclose = (event) => {
            this.recieveEvent(new PostMessage('Tastymeals', 'connection', {msg: 'Disconnected'}));
        };

        this.socket.onmessage = async (msg) => {
            try {
                const event = JSON.parse(await msg.data.text());
                this.recieveEvent(event);
            } catch {}
            };
    }

    broadcastEvent(from, type, value) {
    const event = new PostMessage(from, type, value);
    this.socket.send(JSON.stringify(event));
    }

    addHandler(handler) {
        this.handlers.push(handler);
    }

    removeHandler(handler) {
        this.handlers = this.handlers.filter((h) => h !== handler);
    }

    recieveEvent(event) {
        this.events.push(event);
        this.events.forEach((e) => {
            this.handlers.forEach((handler) => handler(e));
        });
    }  
} 

export const postNotifier = new PostNotifier();