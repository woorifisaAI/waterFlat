package com.waterflat.board.domain.dto;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class UserCntDto {

    private Long totalAccountCnt;
    private Long totalAdminCnt;
    private Long totalUserCnt;
    private Long totalSilverCnt;
    private Long totalGoldCnt;
    private Long totalBlacklistCnt;
}
