import type { ValidationArguments, ValidationOptions } from 'class-validator';
import { isNotEmpty, isNumber, registerDecorator } from 'class-validator';

/** 数字且非空 */
export function IsNotEmptyNumber(validationOptions?: ValidationOptions) {
    return (object: any, propertyName: string) => {
        registerDecorator({
            name: 'isNotEmptyNumber',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate: (value: number): boolean => {
                    return isNotEmpty(value) && isNumber(Number(value));
                },
                defaultMessage: (validationArguments?: ValidationArguments): string => {
                    return `${validationArguments?.property} should not be an empty number`;
                },
            },
        });
    };
}
