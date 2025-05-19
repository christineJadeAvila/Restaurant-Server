import { query } from "../database.js"

export const getOrders = async() => {
    const [rows] = await query('SELECT * FROM orders')
    return rows
} 

export const createOrder = async(ordersData) => {
     const  {purchaseID, purchaseItemName, quantity, supplierID, total, warehouseID} = ordersData
     const {row} = await query(
        `INSERT INTO orders (purchaseID, purchaseItemName, quantity, supplierID, total, warehouseID)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [purchaseID, purchaseItemName, quantity, supplierID, total, warehouseID]
     )
     return rows[0]
}

export const updateOrder = async(purchaseID, ordersData) => {
     const  {purchaseItemName, quantity, supplierID, total, warehouseID} = ordersData
     const {row} = await query(
        `UPDATE orders SET purchaseID=$1, purchaseItemName=$2, quantity=$3, supplierID=$4, total=$5, warehouseID=$6)
        WHERE purchaseID=$1 RETURNING *`,
        [purchaseItemName, quantity, supplierID, total, warehouseID, purchaseID]
     )
     return rows[0]
}

export const deleteOrder = async (purchaseID) => {
    const { rowCount } = await query(`DELETE FROM orders WHERE purchaseID=$1`, [purchaseID])
    return rowCount > 0
}