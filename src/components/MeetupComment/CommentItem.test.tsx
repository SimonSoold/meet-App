import { render, screen } from '@testing-library/react';

import CommentItem from "./CommentItem"

import {meetupList} from "../../testData"

import { Provider } from 'react-redux'
import { store } from '../../store'

describe("CommentItem", () => {
    it("renders h5 in CommentItem without errors (smoke test)", () => {
      render(<Provider store={store}> <CommentItem comment={meetupList[0].comments[0]} /> </Provider>)
      const h5 = screen.getByText(/Vad fint/i);
      expect(h5).toBeInTheDocument();
    })
})