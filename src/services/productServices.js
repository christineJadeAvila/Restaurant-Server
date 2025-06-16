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
    const {category_name, description} = categoryData
    const {rows} = await query(
        `INSERT INTO category (category_name, description)
        VALUES ($1, $2, $3) RETURNING *`,
        [category_name, description]
    )
    return rows[0]
}

export const deleteCategory = async (categoryid) => {
    const { rowCount } = await query(`DELETE FROM category WHERE id = $1`, [categoryid]);
    return rowCount > 0; // Returns true if a row was deleted, false otherwise
}
// end category

// products 
export const createProduct = async(productData) => {
    const {product_name, price, categoryid, image} = productData 
    const {rows} = await query(
        `INSERT INTO product (product_name, price, categoryid, image)
        VALUES ($1, $2, $3, $4) RETURNING * `,
        [product_name, price, categoryid, image]
    )
    return rows[0]
}

export const updateProduct = async(productId, productData) => {
    const {product_name, price, categoryid} = productData 

    const { rows } = await query(
        `UPDATE product SET productId=$1, product_name=$2, price=$3, categoryid=$4, image=$5 
        WHERE productId = $1 RETURNING *`,
        {product_name, price, categoryid, image, productId}
    )

    return rows[0]
}

export const deleteProduct = async (productId) => {
    const { rowCount } = await query(`DELETE FROM product WHERE productId = $1`, [productId]);
    return rowCount > 0; 
};

export const archiveProduct = async (productId) => {
    const { rowCount } = await query(
        `UPDATE product SET is_archived = TRUE WHERE productId = $1`,
        [productId]
    );
    return rowCount > 0;
};

// end products