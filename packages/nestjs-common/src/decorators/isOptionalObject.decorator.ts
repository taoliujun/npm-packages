import type { ValidationArguments, ValidationOptions } from 'class-validator';
import { isObject, registerDecorator } from 'class-validator';
import { isNil } from 'lodash';

/** 对象且可选 */
export function IsOptionalObject(validationOptions?: ValidationOptions) {
    return (object: any, propertyName: string) => {
        registerDecorator({
            name: 'isOptionalObject',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate: (value: unknown): boolean => {
                    if (isNil(value)) {
                        return true;
                    }
                    return isObject(value);
                },
                defaultMessage: (validationArguments?: ValidationArguments): string => {
                    return `${validationArguments?.property} should be an object`;
                },
            },
        });
    };
}
