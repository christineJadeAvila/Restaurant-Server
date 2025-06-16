import { query } from "../database.js"

export const getSuppliers = async() => {
    const {rows} = await query('SELECT * FROM supplier')
    return rows
} 

export const createSupplier = async(suppliersData) => {
     const  {suppliername, contactperson, phone, email, address, suppliertype} = suppliersData
     const {rows} = await query(
        `INSERT INTO supplier (suppliername, contactperson, phone, email, address, suppliertype)
        VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`,
        [suppliername, contactperson, phone, email, address, suppliertype]
     )
     return rows[0]
}

export const updateSupplier = async(supplierid, suppliersData) => {
     const  {suppliername, contactperson, phone, email, address, suppliertype} = suppliersData
     const {rows} = await query(
        `UPDATE supplier SET suppliersid=$1, suppliername=$2, contactperson=$3, phone=$4, email=$5, address=$6, suppliertype=$7)
        WHERE suppliersid=$1 RETURNING *`,
        [suppliername, contactperson, phone, email, address, suppliertype, supplierid ]
     )
     return rows[0]
}

export const deleteSupplier = async (supplierid) => {
    const { rowCount } = await query(`DELETE FROM supplier WHERE supplierid=$1`, [supplierid])
    return rowCount > 0
}