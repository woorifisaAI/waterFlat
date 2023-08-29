package com.waterflat.board.repository;

import com.waterflat.board.domain.entity.Board;
import com.waterflat.board.domain.enum_class.BoardCategory;
import com.waterflat.board.domain.enum_class.UserRole;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {

    Page<Board> findAllByCategoryAndUserUserRoleNot(BoardCategory category, UserRole userRole, PageRequest pageRequest);
    Page<Board> findAllByCategoryAndTitleContainsAndUserUserRoleNot(BoardCategory category, String title, UserRole userRole, PageRequest pageRequest);
    Page<Board> findAllByCategoryAndUserNicknameContainsAndUserUserRoleNot(BoardCategory category, String nickname, UserRole userRole, PageRequest pageRequest);
    List<Board> findAllByUserLoginId(String loginId);
    List<Board> findAllByCategoryAndUserUserRole(BoardCategory category, UserRole userRole);
    Long countAllByUserUserRole(UserRole userRole);
    Long countAllByCategoryAndUserUserRoleNot(BoardCategory category, UserRole userRole);
}
