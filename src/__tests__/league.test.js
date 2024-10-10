import { render, screen } from '@testing-library/react';
import {within} from '@testing-library/dom';
import React from 'react';
import thunk from 'redux-thunk';
// import { mount, shallow } from 'enzyme';
import configureStore from 'redux-mock-store';
import { Provider } from 'react-redux';
import Dashboard from '../components/Dashboard/Dashboard';


let wrapper;
const middlewares = [thunk];
const mockStore = configureStore(middlewares);
const store = mockStore({});

describe('Dashboard render', () => {

    it('should contain League Id label', () => {
        render(<Provider store={store}><Dashboard /></Provider>);
        const { getByText } = within(screen.getByTestId('league-label'));
        expect(getByText('League Id'));
    });
})