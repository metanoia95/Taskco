package com.taskco.entity;

import java.time.LocalDateTime;

import org.hibernate.annotations.CreationTimestamp;
import org.hibernate.annotations.JdbcType;
import org.hibernate.annotations.JdbcTypeCode;
import org.hibernate.annotations.UpdateTimestamp;
import org.hibernate.type.SqlTypes;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Table(name="blog_posts")
public class BlogPost {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id; // 인덱스
	
	private String title;
	
	// 페이지 json 파일
	@Column(columnDefinition = "jsonb")
	@JdbcTypeCode(SqlTypes.JSON)
	private String page_json; 
	
	private String page_html;
	
	@CreationTimestamp
	private LocalDateTime created_at;
	    
    // 수정 일자
    @UpdateTimestamp
	private LocalDateTime updated_at;
	
	
	
}
