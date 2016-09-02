import extendComponentProps from '../extendComponentProps';
import {Map} from 'immutable';
import test from 'ava';

test('extend components props', t => {
  const builtProps = Map({
    children: 'Any children',
    decorated: 'Test',
    loading: false
  })
  const propsDefinition = Map({
    children: Map({
      description: '',
      required: true,
      type: Map({name: 'node'})
    }),
    icon: Map({
      description: '',
      required: false,
      type: Map({name: 'element'})
    }),
    decorated: Map({
      description: '',
      required: false,
      type: Map({name: 'node'})
    }),
    onClick: Map({
      description: '',
      required: false,
      type: Map({name: 'func'})
    }),
    options: Map({
      defaultValue: Map({computed: false, value: []}),
      description: '',
      required: true
    }),
    value: Map({
      description: '',
      required: false
    })
  })
  const extended = extendComponentProps(builtProps, propsDefinition)
  const arrayOfProps = [
    extended.getIn(['children', 'type']) === 'span',
    extended.getIn(['decorated', 'props', 'dangerouslySetInnerHTML', '__html']) === 'Test',
    extended.get('loading') === false,
    extended.get('icon') === '',
    extended.size === 4
  ]
  const result = arrayOfProps.reduce((acc, prop) => acc && prop, true)

  t.pass(result)
});
