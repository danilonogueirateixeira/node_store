'use strict';

const mongoose = require('mongoose');
const Product = mongoose.model('Product');

exports.get = async () => {
    const res = await Product.find({
    }, 'title slug price');
    return res;
}

exports.getBySlug = async (slug) => {
    const res = await Product
        .findOne({
            slug: slug,
        }, 'title slug price tags');
    return res;
}

exports.create = async (data) => {
    var product = new Product(data);
    await product.save();
}

exports.update = async (id, data) => {
    await Product
        .findByIdAndUpdate(id, {
            $set: {
                title: data.title,
                slug: data.slug,
                price: data.price,
            }
        })
}

exports.delete = async (id) => {
    await Product
        .findByIdAndRemove(id);
}