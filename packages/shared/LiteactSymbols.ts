const supportSymbol = typeof Symbol === 'function' && Symbol.for;

export const Liteact_Element_Type = supportSymbol ? Symbol.for('liteact.element') : 0xeac7;
