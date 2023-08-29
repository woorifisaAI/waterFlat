package com.waterflat.board.domain.dto;

import com.waterflat.board.domain.enum_class.UserRole;
import com.waterflat.board.domain.entity.User;
import lombok.Data;

import java.time.LocalDateTime;

@Data
public class UserJoinRequest {

    private String loginId;
    private String password;
    private String passwordCheck;
    private String nickname;

    public User toEntity(String encodedPassword) {
        return User.builder()
                .loginId(loginId)
                .password(encodedPassword)
                .nickname(nickname)
                .userRole(UserRole.USER)
                .createdAt(LocalDateTime.now())
                .receivedLikeCnt(0)
                .build();
    }
}
