import { render, screen } from '@testing-library/react';

import CommentItem from "./CommentItem"

import {meetupList} from "../../testData"

describe("CommentItem", () => {
    it("renders h5 in CommentItem without errors (smoke test)", () => {
      render(<CommentItem comment={meetupList[0].comments[0]} />)
      const h5 = screen.getByText(/Vad fint/i);
      expect(h5).toBeInTheDocument();
    })
})