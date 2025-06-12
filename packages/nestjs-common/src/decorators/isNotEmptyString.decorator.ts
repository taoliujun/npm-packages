import type { ValidationArguments, ValidationOptions } from 'class-validator';
import { isNotEmpty, isString, registerDecorator } from 'class-validator';

/** 字符串且非空 */
export function IsNotEmptyString(validationOptions?: ValidationOptions) {
    return (object: any, propertyName: string) => {
        registerDecorator({
            name: 'isNotEmptyString',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate: (value: string): boolean => {
                    return isString(value) && isNotEmpty(value.trim());
                },
                defaultMessage: (validationArguments?: ValidationArguments): string => {
                    return `${validationArguments?.property} should not be an empty string`;
                },
            },
        });
    };
}
