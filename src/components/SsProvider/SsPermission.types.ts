import {ReactNode} from "react";

export interface MenuPermission<T> {
    containsField?: LogicalCondition<T>;
}

export type Condition<T> = {
    key: Paths<T>;
    value: string;
};

export function evaluateCondition<T>(obj: T, condition: LogicalCondition<T>): boolean {
    if ('AND' in condition) {
        return condition.AND.every(cond => evaluateCondition(obj, cond));
    }
    if ('OR' in condition) {
        return condition.OR.some(cond => evaluateCondition(obj, cond));
    }
    const propertyValue = getNestedProperty(obj, condition.key);
    if (Array.isArray(propertyValue)) {
        return propertyValue.includes(condition.value);
    }
    return propertyValue === condition.value;
}

export type LogicalCondition<T> =
    | { AND: Array<LogicalCondition<T> | Condition<T>> }
    | { OR: Array<LogicalCondition<T> | Condition<T>> }
    | Condition<T>;

export type Paths<T> = T extends object
    ? { [K in keyof T]: `${Exclude<K, symbol>}${"" | `.${Paths<T[K]>}`}` }[keyof T]
    : never;

export function getNestedProperty<T>(obj: T, path: Paths<T>): any {
    return path.split('.').reduce((acc, part) => acc && (acc as any)[part], obj as any);
}

export interface ProviderInterface extends PermissionsContextType {
    children?: ReactNode | undefined
}

export interface PermissionsContextType {
    currentEnv: string;
    permissions: any | undefined;
}
