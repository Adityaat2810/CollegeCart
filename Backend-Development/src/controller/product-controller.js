import ProductService from "../services/product-services";

const productService = new ProductService();

export const create = async (req, res) => {
    try {
        const response = await productService.create(req.body);
    
        return res.status(201).json({
        success: true,
        data: response,
        message: "Successfully created the product",
        err: {},
        });
    } catch (error) {
        return res.status(501).json({
        success: false,
        data: {},
        message: "Internal Server error",
        err: { error },
        });
    }
}