<template>
    <section class="center-bottom">
				<div>board</div>
				<div class="justify-content-end " style="width: auto;">
					<ul class="list-group" style="max-width: auto;">

						<c:forEach var="team" items="${teamMate}">
							<li class="list-group-item d-flex justify-content-around"><span>${team.profile_img}</span>
								<span>${team.name}</span> <c:choose>
									<c:when test="${team.role == '팀장'}">
										<span class="badge rounded-pill bg-primary text-white">${team.role}</span>
									</c:when>
									<c:otherwise>
										<span class="badge rounded-pill bg-secondary text-white">${team.role}</span>
									</c:otherwise>
								</c:choose></li>
						</c:forEach>
					</ul>
				</div>
			</section>


</template>