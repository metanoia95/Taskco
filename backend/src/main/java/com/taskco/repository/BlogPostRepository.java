package com.taskco.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.taskco.entity.BlogPost;

@Repository
public interface BlogPostRepository extends JpaRepository<BlogPost, Long>{
	
}
