import * as supplierServices from "../services/supplierServices.js"

export const getSuppliers = async(req, res) => {
    try {
        const suppliers = await supplierServices.getSuppliers()
        res.status(200).json(suppliers)
    } catch (error) {
        console.error('Error fetching Suppliers:', err)
        res.status(500).json({message: 'Internal Server Error'})
    }
}

export const createSupplier = async (req, res) => {
    try {
        const suppliersData = req.body
        const newSupplier = await supplierServices.createSupplier(suppliersData)
        res.status(200).json(newSupplier)
    } catch (err) { 
        console.error('Error adding Supplier:', err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}

export const updateSupplier = async (req, res) => {
    try {
        const supplierID = req.params.id
        const suppliersData = req.body
        const updatedSupplier = await supplierServices.updatedSupplier(supplierID, suppliersData);
        if (!updatedSupplier) {
            return res.status(404).json({ message: 'Supplier not found' })
        }
        res.status(200).json(updatedPSupplier)

    } catch (err) { 
        console.error('Error updating Supplier:', err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
};

export const deleteSupplier = async (req, res) => {
    try {
        const supplierID = req.params.id
        const deleted = await supplierServices.deleteSupplier(supplierID)
        if (!deleted) {
            return res.status(404).json({ message: 'Supplier not found' })
        }

        res.status(200).send()

    } catch (err) { 
        console.error('Error deleting Supplier:', err)
        res.status(500).json({ message: 'Internal Server Error' })
    }
}