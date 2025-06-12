import type { ValidationArguments, ValidationOptions } from 'class-validator';
import { isNumber, registerDecorator } from 'class-validator';
import { isNil } from 'lodash';

/** 数字且可选 */
export function IsOptionalNumber(validationOptions?: ValidationOptions) {
    return (object: any, propertyName: string) => {
        registerDecorator({
            name: 'isOptionalNumber',
            target: object.constructor,
            propertyName,
            options: validationOptions,
            validator: {
                validate: (value: unknown): boolean => {
                    if (isNil(value)) {
                        return true;
                    }
                    return isNumber(Number(value));
                },
                defaultMessage: (validationArguments?: ValidationArguments): string => {
                    return `${validationArguments?.property} should be an number`;
                },
            },
        });
    };
}
