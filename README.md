# Node.js Introduction

This repository contains examples demonstrating core Node.js concepts for server-side JavaScript implementation, network programming, and peer-to-peer communication.

## Contents Overview

### Basic JavaScript (my_main.js, obj.js)
- Variable scope demonstration (`var`, `let`, `const`)
- JSON serialization/deserialization with `JSON.stringify()` and `JSON.parse()`

### HTTP Servers (serverHTTP.js, server2.js)
- Basic HTTP server implementation using the `http` module
- File-serving HTTP server with request routing and static file delivery
- HTML content serving (index.html)

### TCP Networking (server3.js, server4.js, client3.js, client4.js, client4_new.js)
- Date server: One-time connection that responds with current time
- Capitalization server: Processes client text and returns uppercase version
- TCP clients: One-shot and interactive implementations
- Socket event handling for data transfer and connection management

### Event-Driven Programming (events.js, events2.js)
- Event emitter pattern implementation 
- Event listener registration and management
- Custom event creation and triggering

### Peer-to-Peer Communication (p2p.js)
- Fully connected network topology implementation
- Socket management for multi-peer communication
- Message routing and broadcasting between peers

## Running the Examples

### HTTP Servers
```bash
node serverHTTP.js     # Access via http://127.0.0.1:8000
node server2.js        # Access via http://127.0.0.1:8082/index.html
```

### TCP Servers/Clients
```bash
# Date server
node server3.js        # Start server on port 59090
node client3.js 127.0.0.1  # Connect to server

# Capitalization server
node server4.js        # Start server on port 59898
node client4.js 127.0.0.1 "hello world"  # One-time connection
node client4_new.js 127.0.0.1  # Interactive session
```

### Event Examples
```bash
node events.js         # Basic event example
node events2.js        # Advanced event handling
```

### P2P Chat
```bash
npm install fully-connected-topology  # Install dependency

# Start peers (in separate terminals)
node p2p.js 4000
node p2p.js 4001 4000
node p2p.js 4002 4000 4001

# To message specific peer: "4001>Hello peer 4001!"
# To broadcast: type message without prefix
```

## Key Technical Concepts

1. **Non-blocking I/O**: Event-driven architecture for efficient connection handling
2. **Callback Functions**: Asynchronous execution after operation completion
3. **Event Loop**: Single-threaded execution model for concurrent operations
4. **Module System**: Code organization using built-in (`http`, `net`, `fs`) and external modules
5. **Streams & Buffers**: Efficient data handling with stream-based interfaces
6. **Socket Programming**: Direct TCP communication between networked applications 
7. **Event Emitters**: Publisher-subscriber pattern for event-based programming
8. **Network Topologies**: Implementation of fully-connected peer networks

This collection demonstrates the fundamental capabilities of Node.js for network programming and server-side application development.