# Inscriptions.place
## Write your inscriptions indexer plugin with this interface

### Usage

```javascript

import Plugin from '@inscriptionsplace/plugin-helper';

class MyPlugin extends Plugin {

    //Initialize your plugin
    async init() {
        console.log('MyPlugin loaded')
    }

    //Start your plugin
    async start() {
        console.log('MyPlugin started')
    }

    //Process events
    async processProtocolEvent(protocol, event, data) {
        switch (protocol) {
            case 'eep20':
                switch (event) {
                    case 'transfer':
                        console.log('new eep20 transfer!:', data)
                        break;
                }
        }
    }

}

```

### Custom protocol

```javascript

import Plugin from '@inscriptionsplace/plugin-helper';



class BlockchainLogProtocolPlugin extends Plugin {

    //Initialize your plugin
    async init() {
        const bcLogProtocol = new BlockchainLogProtocol(this.storage, this.api, this.sqlIndex, this.processor);
        await this.registerProtocol('log', BlockchainLogProtocol);
    }

 

}

class BlockchainLogProtocol{
    
    async processTx(etx){
        let {op, log} = etx.protocolData;
        
        switch (op) {
            case 'log':
                console.log('new log event!:', log)
                break;
        }
    }
    
}

```
