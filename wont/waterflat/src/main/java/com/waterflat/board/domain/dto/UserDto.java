package com.waterflat.board.domain.dto;

import com.waterflat.board.domain.entity.User;
import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserDto {

    private String loginId;
    private String nickname;
    private String nowPassword;
    private String newPassword;
    private String newPasswordCheck;

    public static UserDto of(User user) {
        return UserDto.builder()
                .loginId(user.getLoginId())
                .nickname(user.getNickname())
                .build();
    }
}
