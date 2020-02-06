/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ConnectedListScteen, { ListScreen } from '../app/containers/ListScreen';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { List } from 'react-native-paper';
import { FlatList } from 'react-native';
import { shallow } from 'enzyme';

const mockStore = configureStore([]);
describe('List Screen', () => {
  const items = [
    {
      id: 1,
      title: 'the first note',
      description: 'The description goes here',
      address: '47 Phan Văn Hân',
      image: { uri: 'https://picsum.photos/700' },
    },
  ];
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
        <ConnectedListScteen />
      </Provider>,
    );
    expect(instaneOf.toJSON()).toMatchSnapshot();
  });

  describe('list item', () => {
    wrapper = shallow(<ListScreen {...props} />);

    const flatList = wrapper.find(FlatList);
    const item = flatList.renderProp('renderItem')({ item: items });
    const listItem = item.find(List.Item);

    it('should render items corecttly', () => {
      expect(flatList.length).toBe(1);
      expect(listItem.length).toBe(items.length);
    });

    it('should retrn correct keyExtractor', () => {
      const noteItem = items[0];
      const keyExtractor = flatList.props().keyExtractor(noteItem);
      expect(keyExtractor).toEqual(noteItem.id);
    });

    it('should navigate to new screen when click on item', () => {
      listItem.props().onPress();
      expect(props.navigation.push).toHaveBeenCalled();
    });

    it('should render item icon', () => {
      const itemIcon = listItem.props().left();
      expect(itemIcon.type).toEqual(List.Icon);
    });
  });
});
