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
            this.recieveMessage(new PostMessage('Tastymeals', 'connection', {msg: 'Connected'}));
        };
        this.socket.onclose = (event) => {
            this.recieveMessage(new PostMessage('Tastymeals', 'connection', {msg: 'Disconnected'}));
        };
    }
}