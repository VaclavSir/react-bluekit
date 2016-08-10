import extendComponentProps from '../extendComponentProps';
import {Map} from 'immutable';
import test from 'ava';

test('extend components props', t => {
  const propsDefinition = Map({
    children: {
      description: '',
      required: true,
      type: {name: 'node'}
    },
    icon: {
      description: '',
      required: false,
      type: {name: 'element'}
    },
    onClick: {
      description: '',
      required: false,
      type: {name: 'func'}
    },
    options: {
      defaultValue: {computed: false, value: []},
      description: '',
      required: true
    },
    value: {
      description: '',
      required: false
    }
  })
  console.log('props', propsDefinition);

  t.pass()
});
