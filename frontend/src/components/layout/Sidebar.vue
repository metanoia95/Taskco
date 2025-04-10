<template>
<div id="side_nav">
		<div id="project-code-container" style="text-align: center;">
			<b id="copy-code"> 초대코드 복사 <img
				src="https://cdn-icons-png.flaticon.com/512/9411/9411848.png"
				alt="Taskco Logo"
				style="width: 35px; height: auto; cursor: pointer;">
			</b> <input type="hidden" id="hidden-project-code"
				value="${project.p_idx}">
		</div>

		<div
			style="overflow-y: auto; border: 1px solid #ccc; max-width: 700px;">

			<div style="width: 100%;">
				<ul id="plist" class="list-group">
					<c:forEach var="item" items="${list}">
						<li class="list-group-item"><c:choose>
								<c:when test="${item.role == '팀장'}">
									<div class="d-flex justify-content-between"
										OnClick="location.href ='view?p_idx=${item.p_idx}'"
										style="cursor: pointer;">
										<span>${item.p_title}</span><span
											class="badge rounded-pill bg-primary text-white">${item.role}</span>
									</div>
								</c:when>
								<c:otherwise>
									<div class="d-flex justify-content-between"
										OnClick="location.href ='view?p_idx=${item.p_idx}'"
										style="cursor: pointer;">
										<span>${item.p_title}</span><span
											class="badge rounded-pill bg-secondary text-white">${item.role}</span>
									</div>
								</c:otherwise>
							</c:choose></li>
					</c:forEach>
				</ul>
			</div>

		</div>
		<div class="d-flex align-items-center ">
			<input id="search" type="text" placeholder="프로젝트명 검색"
				class="form-control" style="width: 100%">
		</div>
		<!-- User Info -->
		<div class="user-info">
			<span id="bottomProfileImg">프로필사진</span> <span id="user_name">${user.name}</span>
			<span id="currentRole">${join.role}</span>
			<svg id="manageImg"
				style="width: 40px; height: auto; cursor: pointer;"
				onclick="openAuthorityModal()" xmlns="http://www.w3.org/2000/svg"
				width="16" height="16" fill="white" class="bi bi-gear"
				viewBox="0 0 16 16">
  <path
					d="M8 4.754a3.246 3.246 0 1 0 0 6.492 3.246 3.246 0 0 0 0-6.492M5.754 8a2.246 2.246 0 1 1 4.492 0 2.246 2.246 0 0 1-4.492 0" />
  <path
					d="M9.796 1.343c-.527-1.79-3.065-1.79-3.592 0l-.094.319a.873.873 0 0 1-1.255.52l-.292-.16c-1.64-.892-3.433.902-2.54 2.541l.159.292a.873.873 0 0 1-.52 1.255l-.319.094c-1.79.527-1.79 3.065 0 3.592l.319.094a.873.873 0 0 1 .52 1.255l-.16.292c-.892 1.64.901 3.434 2.541 2.54l.292-.159a.873.873 0 0 1 1.255.52l.094.319c.527 1.79 3.065 1.79 3.592 0l.094-.319a.873.873 0 0 1 1.255-.52l.292.16c1.64.893 3.434-.902 2.54-2.541l-.159-.292a.873.873 0 0 1 .52-1.255l.319-.094c1.79-.527 1.79-3.065 0-3.592l-.319-.094a.873.873 0 0 1-.52-1.255l.16-.292c.893-1.64-.902-3.433-2.541-2.54l-.292.159a.873.873 0 0 1-1.255-.52zm-2.633.283c.246-.835 1.428-.835 1.674 0l.094.319a1.873 1.873 0 0 0 2.693 1.115l.291-.16c.764-.415 1.6.42 1.184 1.185l-.159.292a1.873 1.873 0 0 0 1.116 2.692l.318.094c.835.246.835 1.428 0 1.674l-.319.094a1.873 1.873 0 0 0-1.115 2.693l.16.291c.415.764-.42 1.6-1.185 1.184l-.291-.159a1.873 1.873 0 0 0-2.693 1.116l-.094.318c-.246.835-1.428.835-1.674 0l-.094-.319a1.873 1.873 0 0 0-2.692-1.115l-.292.16c-.764.415-1.6-.42-1.184-1.185l.159-.291A1.873 1.873 0 0 0 1.945 8.93l-.319-.094c-.835-.246-.835-1.428 0-1.674l.319-.094A1.873 1.873 0 0 0 3.06 4.377l-.16-.292c-.415-.764.42-1.6 1.185-1.184l.292.159a1.873 1.873 0 0 0 2.692-1.115z" />
</svg>
		</div>


	</div>
</template>