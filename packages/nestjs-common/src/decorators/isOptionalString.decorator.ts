import type { ValidationArguments, ValidationOptions } from 'class-validator';
import { isString, registerDecorator } from 'class-validator';
import { isNil } from 'lodash';

/** 字符串且可选 */
export function IsOptionalString(validationOptions?: ValidationOptions) {
    return (object: any, propertyName: string) => {
        registerDecorator({
            name: 'isOptionalString',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate: (value: unknown): boolean => {
                    if (isNil(value)) {
                        return true;
                    }
                    return isString(value);
                },
                defaultMessage: (validationArguments?: ValidationArguments): string => {
                    return `${validationArguments?.property} should be an string`;
                },
            },
        });
    };
}
