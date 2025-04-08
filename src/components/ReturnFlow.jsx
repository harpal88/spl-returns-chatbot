import { useState } from "react";

const mockOrders = [
  {
    poNumber: "PO12345",
    invoiceNumber: "INV67890",
    serialNumber: "SN98765",
    partNumber: "PN-001",
    qty: 1,
    price: 99.99,
    cardcode: "CUST123",
  },
];

export default function ReturnFlow({ onBack }) {
  const [step, setStep] = useState(1);
  const [orderIdentifier, setOrderIdentifier] = useState("");
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [returnReason, setReturnReason] = useState("wrongPart");
  const [sapcNumber, setSapcNumber] = useState("SAPC-" + Math.random().toString(36).substr(2, 8).toUpperCase());

  const handleSearchOrder = () => {
    const order = mockOrders.find(
      (o) =>
        o.poNumber === orderIdentifier ||
        o.invoiceNumber === orderIdentifier ||
        o.serialNumber === orderIdentifier
    );
    if (order) {
      setSelectedOrder(order);
      setStep(2);
    } else {
      alert("Order not found. Try another identifier.");
    }
  };

  const handleSubmitReturn = () => {
    setStep(3);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      {step === 1 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Start a Return</h3>
          <p className="mb-2">Enter your <strong>PO#, Invoice#, or Serial#</strong>:</p>
          <input
            type="text"
            className="w-full p-2 mb-4 border rounded"
            value={orderIdentifier}
            onChange={(e) => setOrderIdentifier(e.target.value)}
            placeholder="e.g., PO12345"
          />
          <div className="flex space-x-2">
            <button
              onClick={handleSearchOrder}
              className="bg-spl-blue text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Search
            </button>
            <button
              onClick={onBack}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {step === 2 && selectedOrder && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Confirm Return</h3>
          <div className="mb-4">
            <p><strong>PO#:</strong> {selectedOrder.poNumber}</p>
            <p><strong>Part#:</strong> {selectedOrder.partNumber}</p>
            <p><strong>Qty:</strong> {selectedOrder.qty}</p>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Return Reason:</label>
            <select
              className="w-full p-2 border rounded"
              value={returnReason}
              onChange={(e) => setReturnReason(e.target.value)}
            >
              <option value="wrongPart">SPL sent the wrong part</option>
              <option value="faulty">Item is faulty (DOA)</option>
              <option value="cancelOrder">I cancelled the order</option>
            </select>
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleSubmitReturn}
              className="bg-spl-blue text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Submit Return
            </button>
            <button
              onClick={() => setStep(1)}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Back
            </button>
          </div>
        </div>
      )}

      {step === 3 && (
        <div>
          <h3 className="text-lg font-semibold mb-4">Return Approved!</h3>
          <p className="mb-2">Your SAPC (RMA) Number: <strong>{sapcNumber}</strong></p>
          <div className="mb-4">
            <p><strong>Return Reason:</strong> {
              returnReason === "wrongPart" ? "SPL sent the wrong part" :
              returnReason === "faulty" ? "Item is faulty (DOA)" :
              "I cancelled the order"
            }</p>
            {returnReason === "cancelOrder" && (
              <p><strong>Restock Fee:</strong> 20%</p>
            )}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={() => alert("This would generate a PDF in Phase 2")}
              className="bg-spl-blue text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Print Return Form
            </button>
            <button
              onClick={onBack}
              className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
            >
              Back to Dashboard
            </button>
          </div>
        </div>
      )}
    </div>
  );
}