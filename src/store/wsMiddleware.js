import { newMessage } from "./chat"
import { wsConnected, wsDisconnected } from "./websocket"
const socketMiddleware = () => {
    let socket = null;

    const onOpen = store => (event) => {

        store.dispatch(wsConnected(event.target.url));
    };

    const onClose = store => () => {
        store.dispatch(wsDisconnected());
    };

    const onMessage = store => (event) => {
        const payload = JSON.parse(event.data);
        store.dispatch(newMessage(payload))


    };

    return store => next => (action) => {
        switch (action.type) {
            case 'WS_CONNECT':
                if (socket !== null) {
                    socket.close();
                }

                // connect to the remote host
                socket = new WebSocket(action.host);

                // websocket handlers
                socket.onmessage = onMessage(store);
                socket.onclose = onClose(store);
                socket.onopen = onOpen(store);
                break;
            case 'WS_DISCONNECT':
                if (socket !== null) {
                    socket.close();
                }
                socket = null;
                break

            case 'NEW_MESSAGE':
                socket.send(JSON.stringify(action.payload));
                break;

            default:
                return next(action);
        }
    };
};

export default socketMiddleware();
