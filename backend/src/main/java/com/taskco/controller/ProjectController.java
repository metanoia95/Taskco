package com.taskco.controller;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.google.gson.Gson;
import com.taskco.entity.Chat;
import com.taskco.entity.Croom;
import com.taskco.entity.Join;
import com.taskco.entity.Project;
import com.taskco.entity.TeamMate;
import com.taskco.entity.User;
import com.taskco.mapper.ChatMapper;
import com.taskco.mapper.ProjectMapper;

import jakarta.servlet.http.HttpSession;

@Controller
public class ProjectController {

	@Autowired
	private ProjectMapper mapper;

	@Autowired
	private ChatMapper Cmapper;

	@RequestMapping("/loggedin")
	public String loggedin(Model model, HttpSession session) {

		User user = (User) session.getAttribute("user");
		List<Project> list = mapper.list(user);
		System.out.println(list);
		// 세션에 저장(정환추가)
		session.setAttribute("list", list);
		// 모델에도 저장
		model.addAttribute("list", list);

		return "choose";
	}

	@Value("${save.path}")
	private String savePath;

	@RequestMapping("/createProject")
	public String Create(String ed_dt, Project project, HttpSession session) {
		User user = (User) session.getAttribute("user");
		System.out.println(user);

		String uuid = UUID.randomUUID().toString();
		project.setP_idx(uuid);
		project.setEd_dt(ed_dt);
		project.setP_status("진행중");
		project.setEmail(user.getEmail());
		System.out.println(project);

		Croom croom = new Croom();
		croom.setCroom_status("정상");
		croom.setP_idx(uuid);

		mapper.createProject(project);
		mapper.createJoin(project);
		mapper.createCroom(croom);
		return "redirect:/loggedin";
	}

	@RequestMapping(value = "/joinProject", method = RequestMethod.POST)
	public String join(Model model, String p_idx, HttpSession session) {
		User user = (User) session.getAttribute("user");

		Join join = new Join();
		System.out.println(user);

		join.setP_idx(p_idx);
		join.setEmail(user.getEmail());
		join.setApproval_yn("N");
		join.setRole("팀원");
		System.out.println(join);
		try {
			int result = mapper.join(join);
			// session.setAttribute 부분
			if (result > 0) {
				System.out.println("성공");

				return "redirect:/loggedin"; // Redirect to a project page or wherever you want on success
			} else {
				System.out.println("실패");
				return "redirect:/loggedin"; // Redirect to choose on failure
			}
		} catch (Exception e) {
			System.out.println("에러 발생: " + e.getMessage());
			return "redirect:/loggedin"; // Redirect to loggedin in case of exception
		}
	}

	@RequestMapping("/view")
	   public String view(String p_idx, Model model, HttpSession session) {
	      User user = (User) session.getAttribute("user");
	      
	      List<Project> list = mapper.list(user);
	      System.out.println(list);
		  session.setAttribute("list", list);
		  
	      String email = user.getEmail();
	      Project project = mapper.view(p_idx);
	      // 프로젝트 정보 세션에 저장
	      session.setAttribute("project", project);
	      // 팀원 정보 세션에 저장
	      List<TeamMate> teamMate = mapper.teamMate(project);
	      session.setAttribute("teamMate", teamMate);
	      // Join 정보 세션에 저장
	      Join search = new Join();
	      search.setEmail(email);
	      search.setP_idx(project.getP_idx());
	      Join result = mapper.viewJoin(search);
	      session.setAttribute("join", result);
	      // 채팅방 정보 세션에 저장
	      Croom croom = Cmapper.loadRoom(p_idx);
	      session.setAttribute("Croom", croom);
	      System.out.println(p_idx);
	      
	      // 채팅 내역 모델에 추가
	      List<Chat> chatMessages = Cmapper.loadChat(croom);

	      Gson gson = new Gson();
	      String chatMessagesJson = gson.toJson(chatMessages);
	      
	      // JSON 데이터를 JSP로 전달
	      model.addAttribute("chatMessagesJson", chatMessagesJson);

	      return "projectMain";
	   }
	
	// 프로젝트 탈퇴 (팀원용 모달)
	@RequestMapping("/leaveProject")
	public String leaveProject(HttpSession session) {
		// join 세션 가져오기
		Join join = (Join) session.getAttribute("join");

		mapper.leaveProject(join);
		// 탈퇴 후 프로젝트 리스트 갱신
		return "redirect:/loggedin";

	}
	
	// 선택화면으로 이동
	@RequestMapping("/exit")
	public String exit(HttpSession session) {

		return "redirect:/loggedin";
	}

}