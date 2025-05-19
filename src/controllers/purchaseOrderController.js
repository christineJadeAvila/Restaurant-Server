import * as purchaseOrderService from "../services/purchaseOrderServices.js"

export const getOrders = async(req, res) => {
    try {
        const orders = await purchaseOrderService.getOrders()
        res.status(200).json(orders)
    } catch (error) {
        console.error('Error fetching Orders:', err)
        res.status(500).json({message: 'Internal Server Error'})
    }
}

export const createOrder = async (req, res) => {
    try {
        const ordersData = req.body
        const newOrder = await purchaseOrderService.createOrder(ordersData)
        res.status(200).json(newOrder)
    } catch (err) { 
        console.error('Error adding Order:', err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

export const updateOrder = async (req, res) => {
    try {
        const purchaseID = req.params.id
        const ordersData = req.body
        const updatedOrder = await purchaseOrderService.updateOrder(purchaseID, ordersData);
        if (!updatedOrder) {
            return res.status(404).json({ message: 'Order not found' })
        }
        res.status(200).json(updatedOrder)

    } catch (err) { 
        console.error('Error updating order:', err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const purchaseID = req.params.id
        const deleted = await purchaseOrderService.deleteOrder(purchaseID)
        if (!deleted) {
            return res.status(404).json({ message: 'Product not found' })
        }

        res.status(200).send()

    } catch (err) { 
        console.error('Error deleting product:', err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}