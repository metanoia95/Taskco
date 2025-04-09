package com.taskco.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taskco.entity.User;
import com.taskco.mapper.UserMapper;

import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/api")
public class UserRestController {
	
	@Autowired
	private UserMapper mapper;
	
	
	@RequestMapping("/login")
	public ResponseEntity<?> login(@RequestBody User user, HttpSession session) {


		User result = mapper.login(user);

		if (result == null) {
			return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
								 .body("아이디 또는 비밀번호가 틀렸습니다.");
			
		} 
		session.setAttribute("user", result);
		return ResponseEntity.ok("로그인 성공");
		

	}
	
	
}
