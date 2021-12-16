import { render, screen } from '@testing-library/react';

import CommentList from "./CommentList"

import {meetupList} from "../../testData"

describe("CommentList", () => {
    it("renders h5 in CommentItem without errors (smoke test", () => {
      render(<CommentList commentList={meetupList[0].comments} />)
      const h5 = screen.getByText(/Vad fint/i);
      expect(h5).toBeInTheDocument();
    })
})