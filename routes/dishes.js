var express = require('express');
var router = express.Router();

var dish = require('../models/dish')
var Cart = require('../models/cart')

router.get('/dishesx', function (req, res, next) {
    dish.find()
        .exec(function (err, messages) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Success',
                obj: messages
            });
        });
});

router.get('/cart', function (req, res, next) {
    Cart.find()
        .exec(function (err, messages) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(201).json({
                message: 'Success',
                obj: messages
            });
        });
});

router.get('/dishesx/:id', function (req, res, next) {
    dish.findById(req.params.id, function(err,result){
		if(err){
			return res.status(500).json({
				title:'An error occured',
				error:err
			})
		}
		if(!result){
			return res.status(500).json({
				title:'An error occured while retrieving',
				error:err
			})
		}
		res.status(200).json({
			message:'successful retrieval',
			obj:result
		})
    })
});

router.post('/add', function (req, res, next) {
    var user = new dish({
	    name: req.body.name,
	    description: req.body.description,
	    imagePath: req.body.imagePath,
	    price: req.body.price,
	    category: req.body.category,
	    likes:req.body.likes
    });
    user.save(function(err, result) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        res.status(201).json({
            message: 'recipe added succesfully',
            obj: result
        });
    });
});

router.post('/addcart', function (req, res, next) {
    dish.findById(req.body.id, function(err,result){
		if(err){
			return res.status(500).json({
				title:'An error occured',
				error:err
			})
		}
		if(!result){
			return res.status(500).json({
				title:'An error occured while retrieving',
				error:err
			})
		}
	    var cart = new Cart({
		    name: result.name,
		    imagePath: result.imagePath,
		    price: result.price,
		    quantity:req.body.number
	    });
	    cart.save(function(err, result) {
	        if (err) {
	            return res.status(500).json({
	                title: 'An error occurred in level 2',
	                error: err
	            });
	        }
	        res.status(201).json({
	            message: 'Cart added succesfully',
	            obj: result
	        });
	    });
    })
});

router.delete('/:id', function (req, res, next) {
    Cart.findById(req.params.id, function (err, message) {
        if (err) {
            return res.status(500).json({
                title: 'An error occurred',
                error: err
            });
        }
        if (!message) {
            return res.status(500).json({
                title: 'No Message Found!',
                error: {message: 'Message not found'}
            });
        }
        message.remove(function (err, result) {
            if (err) {
                return res.status(500).json({
                    title: 'An error occurred',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted message',
                obj: result
            });
        });
    });
});

module.exports = router;
