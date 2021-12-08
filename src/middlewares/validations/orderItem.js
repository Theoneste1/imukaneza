import Joi from 'joi';

export function orderItemValidate(req, res, next) {

	const orderItemValiation = Joi.object({
		itemName: Joi.string().required().email(),
		description: Joi.string().required().trim(),
        quantity: Joi.string().required().trim(),
        rideId: Joi.number()
	});

	const result = orderItemValiation.validate(req.body);
	if (result.error) return res.status(400).json({ error: result.error.details[0].message });
	next();
}