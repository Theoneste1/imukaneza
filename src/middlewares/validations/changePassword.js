import Joi from 'joi'
export function changePassValidate(req, res, next) {
	const userValiation = Joi.object({

		currentpassword: Joi.string().required(),
		newpassword: Joi.string().required(),
        confirmpassword: Joi.string().required(),
	});
	const result = userValiation.validate(req.body);
	if (result.error) return res.status(400).json({ error: result.error.details[0].message });
	next();
}