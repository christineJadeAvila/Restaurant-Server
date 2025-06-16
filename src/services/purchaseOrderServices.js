import { query } from "../database.js"

export const getOrders = async() => {
    const {rows} = await query('SELECT * FROM purchase_order')
    return rows
} 

export const createOrder = async(ordersData) => {
     const  {purchaseid, purchaseitemname, quantity, supplierid, total, warehouseid} = ordersData
     const {row} = await query(
        `INSERT INTO purchase_order (purchaseid, purchaseitemname, quantity, supplierid, total, warehouseid)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [purchaseid, purchaseitemname, quantity, supplierid, total, warehouseid]
     )
     return rows[0]
}

export const updateOrder = async(purchaseID, ordersData) => {
     const  {purchaseid, purchaseitemname, quantity, supplierid, total, warehouseid} = ordersData
     const {row} = await query(
        `UPDATE purchase_order SET purchaseid=$1, purchaseitemname=$2, quantity=$3, supplierid=$4, total=$5, warehouseid=$6)
        WHERE purchaseid=$1 RETURNING *`,
        [purchaseid, purchaseitemname, quantity, supplierid, total, warehouseid]
     )
     return rows[0]
}

export const deleteOrder = async (purchaseID) => {
    const { rowCount } = await query(`DELETE FROM purchase_order WHERE purchaseid=$1`, [purchaseID])
    return rowCount > 0
}