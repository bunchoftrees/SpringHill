package com.springhill.blogservice.service;

import com.springhill.blogservice.model.BlogPost;
import com.springhill.blogservice.repository.BlogPostRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class BlogPostService {

    @Autowired
    private BlogPostRepository blogPostRepository;

    public BlogPost createPost(BlogPost post) {
        return blogPostRepository.save(post);
    }

    public List<BlogPost> getAllPosts() {
        return blogPostRepository.findAll();
    }

    public BlogPost getPostById(Long id) {
        return blogPostRepository.findById(id).orElse(null);
    }

    public BlogPost updatePost(Long id, BlogPost postDetails) {
        BlogPost post = blogPostRepository.findById(id).orElse(null);
        if (post != null) {
            post.setTitle(postDetails.getTitle());
            post.setContent(postDetails.getContent());
            return blogPostRepository.save(post);
        }
        return null;
    }

    public void deletePost(Long id) {
        blogPostRepository.deleteById(id);
    }
}
