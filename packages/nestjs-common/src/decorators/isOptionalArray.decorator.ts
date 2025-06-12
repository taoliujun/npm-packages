import type { ValidationArguments, ValidationOptions } from 'class-validator';
import { registerDecorator } from 'class-validator';
import { isArray, isNil } from 'lodash';

/** 数组且可选 */
export function IsOptionalArray(validationOptions?: ValidationOptions) {
    return (object: any, propertyName: string) => {
        registerDecorator({
            name: 'isOptionalArray',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate: (value: unknown): boolean => {
                    if (isNil(value)) {
                        return true;
                    }
                    return isArray(value);
                },
                defaultMessage: (validationArguments?: ValidationArguments): string => {
                    return `${validationArguments?.property} should be an array`;
                },
            },
        });
    };
}
