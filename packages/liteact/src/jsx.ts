import { React_Element_Type } from 'shared/ReactSymbols';

const ReactElement = (type, key, ref, props) => {
  const element = {
    $$typeof: React_Element_Type,
    key: '',
    ref: '',
    props: '',
    __mark: 'binghuis',
  };
};
