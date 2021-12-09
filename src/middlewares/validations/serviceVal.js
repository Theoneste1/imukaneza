import Joi from 'joi';

export function serviceValidate(req, res, next) {

	const serviceValiation = Joi.object({
		name: Joi.string().required().trim(),
		description: Joi.string().required().trim(),
    
	});

	const result = serviceValiation.validate(req.body);
	if (result.error) return res.status(400).json({ error: result.error.details[0].message });
	next();
}