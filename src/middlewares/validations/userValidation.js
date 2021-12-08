import Joi from 'joi';

export function userValidate(req, res, next) {
	const userValiation = Joi.object({
		firstName: Joi.string().min(2).required().trim(),
		lastName: Joi.string().min(2).required().trim(),
		email: Joi.string().min(4).required().email(),
		phoneNumber: Joi.string().min(10).required(),
		password: Joi.string().min(6).required().max(8).trim(),
		homeAddress: Joi.string().required(),
		userAccess: Joi.string().valid('superAdmin', 'subAdmin', 'client'),
	});
	const result = userValiation.validate(req.body);
	if (result.error) return res.status(400).json({ error: result.error.details[0].message });
	next();
}

export function loginValidate(req, res, next) {
	const userValiation = Joi.object({

		email: Joi.string().min(4).required().email(),
		password: Joi.string().min(6).required().max(8).trim(),
	});
	const result = userValiation.validate(req.body);
	if (result.error) return res.status(400).json({ error: result.error.details[0].message });
	next();
}