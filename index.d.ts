// index.d.ts
export namespace math {
  export function add(a: number, b: number): number;
  export function subtract(a: number, b: number): number;
}

export namespace array {
  export function unique<T>(arr: T[]): T[];
}

export namespace string {
  export function capitalize(str: string): string;
}

export namespace date {
  export function format(date: Date, formatStr: string): string;
}

export namespace object {
  export function merge<T, U>(obj1: T, obj2: U): T & U;
}
