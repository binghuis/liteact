const supportSymbol = typeof Symbol === 'function' && Symbol.for;

export const React_Element_Type = supportSymbol ? Symbol.for('react.element') : 0xeac7;
