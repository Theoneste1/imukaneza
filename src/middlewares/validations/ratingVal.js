import Joi from 'joi';

export function ratingValidate(req, res, next) {

	const ratingValiation = Joi.object({
		rate: Joi.string().required(),
        relocator: Joi.number().required(),
		description: Joi.string().required().trim(),
    
	});

	const result = ratingValiation.validate(req.body);
	if (result.error) return res.status(400).json({ error: result.error.details[0].message });
	next();
}