import { query } from "../database.js"

export const getCategories = async() => {
    const {rows} = await query('SELECT * FROM category')
    return rows
}

export const getProducts = async() => {
    const {rows} = await query('SELECT * FROM product')
    return rows
}

// category
export const createCategory = async(categoryData) => {
    const {categoryId, category_name, description} = categoryData
    const {rows} = await query(
        `INSERT INTO category (id, name, description)
        VALUES ($1, $2, $3) RETURNING *`,
        [categoryId, category_name, description]
    )
    return rows[0]
}

export const deleteCategory = async (categoryId) => {
    const { rowCount } = await query(`DELETE FROM category WHERE id = $1`, [categoryId]);
    return rowCount > 0; // Returns true if a row was deleted, false otherwise
}
// end category

// products 
export const createProduct = async(productData) => {
    const {productId, product_name, price, category_id} = productData 
    const {rows} = await query(
        `INSERT INTO product (productId, product_name, price, category_id)
        VALUES ($1, $2, $3, $4, $5) RETURNING * `,
        [productId, product_name, price, category_id]
    )
    return rows[0]
}

export const updateProduct = async(productId, productData) => {
    const {productId, product_name, price, category_id} = productData 

    const { rows } = await query(
        `UPDATE product SET productId=$1, product_name=$2, price=$3, category_id=$4 
        WHERE product_id = $1 RETURNING *`,
        {productId, product_name, price, category_id}
    )

    return rows[0]
}

export const deleteProduct = async (productId) => {
    const { rowCount } = await query(`DELETE FROM product WHERE productId = $1`, [productId]);
    return rowCount > 0; 
};
// end products