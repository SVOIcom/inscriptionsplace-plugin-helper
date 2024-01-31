/**
 * Abstract class model for a plugin
 */

class Plugin {
    /**
     * Constructor
     * @param {NamespacedKeyValueStorage} storage
     * @param {Api} api
     * @param {SqlIndex} sqlIndex
     * @param {TransactionsProcessor} processor
     */
    constructor(storage, api, sqlIndex, processor) {
        this.storage = storage;
        this.api = api;
        this.sqlIndex = sqlIndex;
        this.processor = processor;
    }

    /**
     * Initialize plugin
     * @returns {Promise<void>}
     */
    async init() {
    }

    /**
     * Start plugin when initialized
     * @returns {Promise<void>}
     */
    async start() {
    }

    /**
     * This method calls every time when new raw transaction received, before protocolTx processing
     * @param {EnrichedTransactionMessage|object} etx
     * @param {TransactionMessage|object} tx
     * @returns {Promise<*>}
     */
    async processTransaction(etx, tx) {

    }


    /**
     * This method calls by protocol handlers when some event happened
     * @param {string} protocol
     * @param {string} event
     * @param {ProtocolEvent} data
     * @returns {Promise<void>}
     */

    async processProtocolEvent(protocol, event, data) {

    }


    /**
     * Register protocol handler (for plugins)
     * @param {string} protocol
     * @param {object|function} handler
     * @returns {Promise<*>}
     */
    async registerProtocolHandler(protocol, handler) {
        return await this.processor.registerProtocolHandler(protocol, handler);
    }
}

export default Plugin;
