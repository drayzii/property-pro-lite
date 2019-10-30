/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import moxios from 'moxios';
import thunk from 'redux-thunk';
import Enzyme from 'enzyme/build';
import configureStore from 'redux-mock-store';
import Adapter from 'enzyme-adapter-react-16/build';
import loginAction from '../login';
import dbCall from '../../config/dbCall';
import { AUTH_SUCCESS, AUTH_ERROR } from '../action-types';

Enzyme.configure({ adapter: new Adapter() });

let store;
const mockedStore = configureStore([thunk]);

const flushPromises = () => new Promise((resolve) => setImmediate(resolve));

describe('Log in actions', () => {
  beforeEach(() => {
    store = mockedStore({
      token: null,
      error: false,
    });
    moxios.install(dbCall);
  });

  afterEach(() => {
    moxios.uninstall(dbCall);
  });
  it('should log in user', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: {
            status: 200,
            message: 'Successfully logged in',
          },
        },
      });
    });
    await store.dispatch(loginAction({ email: 'jonathan@gmail.com', password: 'password' }));
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[0].type).toEqual(AUTH_SUCCESS);
  });
  it('should catch log in errors', async () => {
    moxios.wait(() => {
      const request = moxios.requests.mostRecent();
      request.respondWith({
        status: 200,
        response: {
          data: {
            status: 500,
            error: 'Error Message',
          },
        },
      });
    });
    await store.dispatch(loginAction({ email: 'jonathan@gmail.com', password: 'password' }));
    await flushPromises();
    const calledActions = store.getActions();
    expect(calledActions[0].type).toEqual(AUTH_ERROR);
  });
});
