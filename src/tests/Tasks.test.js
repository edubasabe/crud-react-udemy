import React from 'react';
import Tasks from '../components/Tasks/Tasks';

import  { shallow } from "enzyme";

describe('Render Tasks component', () => {
  let wrapper;
  const dummyProps = {
    tasks: [
      {
        "id": "1ukiUsRIzSuOOyGDX9G6",
        "fecha": 1594582317824,
        "name": "Correr"
      },
      {
        "id": "8haYWYsIIM6cKnLDTEm2",
        "name": "Comprar",
        "fecha": 1594582754126
      },
      {
        "id": "WDW7tEekMcL4oqCuzmdt",
        "fecha": 1594582404170,
        "name": "Programar"
      },
      {
        "id": "sdkYOFO0XDcJi6LH29wT",
        "name": "Bailar",
        "fecha": 1594591053323
      }
    ]
  };

  beforeEach(() => {
    wrapper = shallow(<Tasks {...dummyProps}/>);
  });

  it('renders the list of tasks', () => {
    expect(wrapper.find('#tasks-list').exists()).toBe(true);
  });

  test('if tasks prop is empty should show empty message', () => {
    wrapper = shallow(<Tasks tasks={[]}/>);
    expect(wrapper.find('#empty-list').exists()).toBe(true);
    expect(wrapper.find('#empty-list').text()).toBe("No hay tareas");
  })

});