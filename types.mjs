/**
 * @typedef {string} CleanAddress
 * @description A string representing a clean address (without workchain and seqno).
 */

/**
 * Represents the protocol data.
 * @typedef {Object} ProtocolData
 * @property {string} p - Protocol identifier.
 * @property {string} op - Operation type.
 * @property {string} [tick] - Ticker of the currency.
 * @property {string} [amt] - Amount of the operation.
 * @property {string} [memo] - Additional information or notes.
 */

/**
 * Represents the message details.
 * @typedef {Object} Message
 * @property {string} hash - Unique hash of the message.
 * @property {string} src - Source address.
 * @property {string} dst - Destination address.
 * @property {string} value - Value transferred.
 * @property {boolean} bounce - Indicates if the message is a bounce message.
 * @property {boolean} bounced - Indicates if the message has bounced.
 * @property {string} body - Encoded message body.
 * @property {string} bodyHash - Hash of the message body.
 * @property {string} boc - Bag of cells encoded message.
 */


/**
 * Represents a transaction or a message sent in the network.
 * @typedef {Object} EnrichedTransactionMessage
 * @property {string} sender - The sender's address.
 * @property {number} time - Timestamp of the message.
 * @property {string} id - Unique identifier of the message.
 * @property {Message} msg - The message details.
 * @property {string} value - Value transferred in the transaction.
 * @property {string} body - Encoded transaction body.
 * @property {ProtocolData} protocolData - Protocol-specific data.
 */


/**
 * Represents the unique identifier of a transaction.
 * @typedef {Object} TransactionId
 * @property {string} lt - Logical time of the transaction.
 * @property {string} hash - Unique hash of the transaction.
 */


/**
 * Represents the details of a transaction, including its status and associated messages.
 * @typedef {Object} TransactionMessage
 * @property {TransactionId} id - The unique identifier of the transaction.
 * @property {TransactionId} prevTransactionId - The unique identifier of the previous transaction.
 * @property {number} createdAt - Timestamp of when the transaction was created.
 * @property {boolean} aborted - Indicates if the transaction was aborted.
 * @property {number} exitCode - The exit code of the transaction.
 * @property {number} resultCode - The result code of the transaction.
 * @property {string} origStatus - The original status of the transaction.
 * @property {string} endStatus - The end status of the transaction.
 * @property {string} totalFees - The total fees for the transaction.
 * @property {Message} inMessage - The incoming message associated with the transaction.
 * @property {Message[]} outMessages - An array of outgoing messages (if any).
 * @property {string} boc - Bag of cells encoded representation of the transaction.
 */


/**
 * @typedef {Object} EEP20TransferEvent
 * @property {string} sender - The sender's address.
 * @property {string} to - The recipient's address.
 * @property {string} amount - The amount transferred.
 * @property {string} tick - The token's ticker.
 * @property {string} memo - Additional information or notes.
 * @property {string} balance - The recipient's balance.
 * @property {EnrichedTransactionMessage} tx
 */


/**
 * @typedef {Object} EEP20MintEvent
 * @property {string} sender - The sender's address.
 * @property {string} amount - The amount transferred.
 * @property {string} tick - The token's ticker.
 * @property {string} memo - Additional information or notes.
 * @property {EnrichedTransactionMessage} tx
 *
 *
 */

/**
 * @typedef {Object} EEP20DeployEvent
 * @property {string} sender - The sender's address.
 * @property {string} tick - The token's ticker.
 * @property {string} memo - Additional information or notes.
 * @property {number} lim - The minting limit.
 * @property {number} price - Token price
 * @property {number} maxSupply - Max supply
 * @property {EnrichedTransactionMessage} tx
 */

/**
 * @typedef {EEP20TransferEvent|EEP20MintEvent|EEP20DeployEvent} EEP20Event
 * @typedef {EEP20Event|object} ProtocolEvent
 */

