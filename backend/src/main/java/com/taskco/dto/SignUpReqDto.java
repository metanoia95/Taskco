package com.taskco.dto;


import com.fasterxml.jackson.annotation.JsonProperty;
import com.taskco.entity.User;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Getter
@Builder // 빌더
@AllArgsConstructor //필드명 전체가 담긴 생성자
@ToString
public class SignUpReqDto {
	

	private String email;
	
	@JsonProperty("password")
	private String pw;
	
	
	private String name;
	
	
	public User toEntity(){
		return User.builder()
				.email(this.email)
				.pw(this.pw)
				.name(this.name)
				.build();
		
		
	}
	
	
}
