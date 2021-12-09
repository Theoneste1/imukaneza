import Joi from 'joi';

export function transactionValidate(req, res, next) {

	const transactionValiation = Joi.object({
		rideId: Joi.number().required(),
        relocator: Joi.number().required(),
		price: Joi.number().required()
    
	});

	const result = transactionValiation.validate(req.body);
	if (result.error) return res.status(400).json({ error: result.error.details[0].message });
	next();
}