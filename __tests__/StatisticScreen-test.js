/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ConnectedStatisticScteen, {
  StatisticScreen,
} from '../app/containers/StatisticScreen';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { List } from 'react-native-paper';
import { FlatList } from 'react-native';
import { shallow } from 'enzyme';

const mockStore = configureStore([]);
describe('List Screen', () => {
  const noteItem = {
    id: 1,
    title: 'the first note',
    description: 'The description goes here',
    address: '47 Phan Văn Hân',
    image: { uri: 'https://picsum.photos/700' },
  };
  let store;
  let instaneOf;
  let wrapper;
  const props = {
    navigation: {
      navigate: jest.fn(),
      push: jest.fn(),
      openDrawer: jest.fn(),
    },
  };

  it('should render with given state from Redux store', () => {
    store = mockStore({
      notes: [],
    });
    store.dispatch = jest.fn();
    instaneOf = renderer.create(
      <Provider store={store}>
        <ConnectedStatisticScteen />
      </Provider>,
    );
    expect(instaneOf.toJSON()).toMatchSnapshot();
  });

  describe('Statistic without note', () => {
    wrapper = shallow(<StatisticScreen notes={[]} {...props} />);
    const createButton = wrapper.find('[data-test="button-create-new"]');
    console.log(wrapper.debug());
    it('should render create new note button', () => {
      expect(createButton).toHaveLength(1);
    });

    it('should navigate to new screen when click on create new button', () => {
      createButton.props().onPress();
      expect(props.navigation.push).toHaveBeenCalled();
    });
  });

  describe('Statistic with notes', () => {
    const notes = [
      {
        id: 1,
        title: 'the first note',
        description: 'The description goes here',
        address: '47 Phan Văn Hân',
        image: { uri: 'https://picsum.photos/700' },
      },
    ];
    wrapper = shallow(<StatisticScreen notes={notes} {...props} />);
    const viewDetailButton = wrapper.find('[data-test="button-view-detail"]');
    it('should render create view detail button', () => {
      expect(viewDetailButton).toHaveLength(1);
    });

    it('should navigate to new screen when click on view detail button', () => {
      viewDetailButton.props().onPress();
      expect(props.navigation.push).toHaveBeenCalled();
    });
  });
});
