import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux'
import { store } from 'store'

import CommentList from "./CommentList"

import {meetupList} from "testData"


describe("CommentList", () => {
    it("renders h5 in CommentItem without errors (smoke test)", () => {
      render(<Provider store={store}> <CommentList commentList={meetupList[0].comments} /> </Provider>)
      const h5 = screen.getByText(/Vad fint/i);
      expect(h5).toBeInTheDocument();
    })
})