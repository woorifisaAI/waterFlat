package com.waterflat.board.domain.dto;

import com.waterflat.board.domain.entity.Board;
import com.waterflat.board.domain.entity.Comment;
import com.waterflat.board.domain.entity.User;
import lombok.Data;

@Data
public class CommentCreateRequest {

    private String body;

    public Comment toEntity(Board board, User user) {
        return Comment.builder()
                .user(user)
                .board(board)
                .body(body)
                .build();
    }
}
