import { render, screen } from '@testing-library/react';

import CommentList from "./CommentList"

import {meetupList} from "../../testData"

import { Provider } from 'react-redux'
import { store } from '../../store'

describe("CommentList", () => {
    it("renders h5 in CommentItem without errors (smoke test)", () => {
      render(<Provider store={store}> <CommentList commentList={meetupList[0].comments} /> </Provider>)
      const h5 = screen.getByText(/Vad fint/i);
      expect(h5).toBeInTheDocument();
    })
})