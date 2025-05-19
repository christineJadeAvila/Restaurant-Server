import { query } from "../database.js"

export const getSuppliers = async() => {
    const [rows] = await query('SELECT * FROM suppliers')
    return rows
} 

export const createSupplier = async(suppliersData) => {
     const  {supplierID, supplierName, contactPerson, phone, email, address, supplierType} = suppliersData
     const {row} = await query(
        `INSERT INTO suppliers (supplierID, supplierName, contactPerson, phone, email, address, supplierType)
        VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *`,
        [supplierID, supplierName, contactPerson, phone, email, address, supplierType]
     )
     return rows[0]
}

export const updateSupplier = async(supplierID, suppliersData) => {
     const  {supplierName, contactPerson, phone, email, address, supplierType} = suppliersData
     const {row} = await query(
        `UPDATE suppliers SET suppliersID=$1, supplierName=$2, contactPerson=$3, phone=$4, email=$5, address=$6, supplierType=$7)
        WHERE suppliersID=$1 RETURNING *`,
        [supplierName, contactPerson, phone, email, address, supplierType, supplierID ]
     )
     return rows[0]
}

export const deleteSupplier = async (supplierID) => {
    const { rowCount } = await query(`DELETE FROM suppliers WHERE supplierID=$1`, [supplierID])
    return rowCount > 0
}