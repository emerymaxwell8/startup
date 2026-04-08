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

    }  
}