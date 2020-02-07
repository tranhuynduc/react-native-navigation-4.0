/**
 * @format
 */

import 'react-native';
import React from 'react';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';
import ConnectedNoteDetailScreen, {
  NoteDetailScreen,
} from '../app/containers/NoteDetailScreen';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import { List } from 'react-native-paper';
import { FlatList } from 'react-native';
import { shallow } from 'enzyme';
import ImagePicker from 'react-native-image-picker';

jest.mock('react-native-image-picker', () => ({
  NativeModule: {
    ImagePickerManager: jest.fn(),
  },
  showImagePicker: jest.fn(),
}));
import Geocoder from 'react-native-geocoding';
jest.mock('react-native-geocoding');

const mockStore = configureStore([]);
describe('Note detail Screen', () => {
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
      getParam: jest.fn(() => ({
        latitude: 10.812,
        longitude: 119.12312,
      })),
    },
    dispatch: jest.fn(),
  };
  const fakeAddress = 'fake address';
  const results = [{ formatted_address: fakeAddress }];
  Geocoder.from.mockResolvedValue({ results: results });

  it('should render with given state from Redux store', () => {
    store = mockStore({
      notes: [],
    });
    store.dispatch = jest.fn();
    const connectedComponent = renderer.create(
      <Provider store={store}>
        <ConnectedNoteDetailScreen {...props} />
      </Provider>,
    );
    expect(connectedComponent.toJSON()).toMatchSnapshot();
    instaneOf = renderer.create(<NoteDetailScreen {...props} />).getInstance();
  });

  describe('Note detail', () => {
    it('should update adress follow the geocoder', () => {
      expect(instaneOf.state.address).toEqual(fakeAddress);
    });

    it('should update state title/description when input change', () => {
      const titleValue = 'title';
      const descriptionValue = 'description';
      instaneOf.handleChangeTitle(titleValue);
      instaneOf.handleChangeDescription(descriptionValue);
      expect(instaneOf.state.title).toEqual(titleValue);
      expect(instaneOf.state.description).toEqual(descriptionValue);
    });

    it('should set state image/address with given input', () => {
      const imageValue = 'image';
      const addressValue = 'address';
      instaneOf.setImage(imageValue);
      instaneOf.setAddress(addressValue);
      expect(instaneOf.state.image).toEqual(imageValue);
      expect(instaneOf.state.address).toEqual(addressValue);
    });

    it('should call dispatch when create note', () => {
      instaneOf.createNote();
      expect(props.dispatch).toHaveBeenCalled();
    });

    describe('handle button click', () => {
      wrapper = shallow(<NoteDetailScreen {...props} />);
      it('test', () => {
        const buttonUpload = wrapper.find('[data-test="button-upload"]');
        buttonUpload.props().onPress();
        expect(ImagePicker.showImagePicker).toHaveBeenCalled();
      });
    });

    describe('handle image', () => {
      it('should have instruction message when user uploads image', () => {
        const response = {
          error: 'Nou found',
          customButton: 'open camera',
        };

        instaneOf.handleImage({
          didCancel: true,
        });
        expect(instaneOf.state.message).toEqual('User cancelled image picker');

        instaneOf.handleImage({
          error: response.error,
        });
        expect(instaneOf.state.message).toEqual(
          `ImagePicker Error: ${response.error}`,
        );

        instaneOf.handleImage({
          customButton: response.customButton,
        });
        expect(instaneOf.state.message).toEqual(
          `User tapped custom button:,${response.customButton}`,
        );
      });

      it('should update image state when user chooses image', () => {
        const source = {
          uri:
            'content://com.project.provider/root/storage/emulated/0/Pictures/image-3fb1e4d4-a47a-473f-b047-bf6f42f9aed3.jpg',
        };
        instaneOf.handleImage({
          uri: source.uri,
        });

        expect(instaneOf.state.image).toEqual({
          uri: source.uri,
        });
      });
    });
  });
});
