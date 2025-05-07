package com.taskco.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taskco.dto.blog.PostListResDto;
import com.taskco.dto.blog.PostResDto;
import com.taskco.dto.blog.SavePostReqDto;
import com.taskco.service.BlogService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping("/api/blog")
@RequiredArgsConstructor
public class BlogController {
	
	private final BlogService blogService;
	
	@PostMapping("/saveblogpost")
	public ResponseEntity<?> savePost(@RequestBody SavePostReqDto dto){
		
		blogService.savePost(dto);
		return ResponseEntity.ok().build();
		
	}
	
	
	@GetMapping("/posts")
	public ResponseEntity<?> getPostList(){
		
		List<PostListResDto> result = blogService.getPostList();
		
		return ResponseEntity.ok(result);
	}
	
	
	@GetMapping("/posts/{id}")
	public ResponseEntity<?> getPostById(@PathVariable Long id){
		
		PostResDto result = blogService.getPost(id);
		return ResponseEntity.ok(result);
		
	}
	
	@DeleteMapping("/posts/{id}")
	public ResponseEntity<?> deletePostById(@PathVariable Long id){
		
		blogService.deletePost(id);
		return ResponseEntity.ok().build();
		
	}
	
	@GetMapping("/posts/getjson/{id}")
	public ResponseEntity<?> getPostJsonById(@PathVariable Long id){
		
		PostResDto result = blogService.getPostJson(id);
		return ResponseEntity.ok(result);
		
	}
	
	
	
	
}
