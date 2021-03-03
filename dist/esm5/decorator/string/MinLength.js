import { buildMessage, ValidateBy } from "../common/ValidateBy";
import validator from "validator";
export var MIN_LENGTH = "minLength";
/**
 * Checks if the string's length is not less than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function minLength(value, min) {
    return typeof value === "string" && validator.isLength(value, { min: min });
}
/**
 * Checks if the string's length is not less than given number. Note: this function takes into account surrogate pairs.
 * If given value is not a string, then it returns false.
 */
export function MinLength(min, validationOptions) {
    return ValidateBy({
        name: MIN_LENGTH,
        constraints: [min],
        validator: {
            validate: function (value, args) { return minLength(value, args.constraints[0]); },
            defaultMessage: buildMessage(function (eachPrefix) { return eachPrefix + "$property must be longer than or equal to $constraint1 characters"; }, validationOptions)
        }
    }, validationOptions);
}

//# sourceMappingURL=MinLength.js.map
