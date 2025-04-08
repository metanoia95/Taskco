

<link
	href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
	rel="stylesheet"
	integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
	crossorigin="anonymous"></link>



<template>

	<div class="container d-flex align-items-center justify-content-center"
		style="min-height: 100vh;">
		<div class="row justify-content-between align-items-center"
			style="width: 100%; max-width: 1200px;">


			<!-- 로그인 폼 섹션 -->
			<div class="col-md-6">
				<div class="screen">
					<div class="screen__content mt-3">
						<form class="login" action="login" method="post">
							<!-- 이메일 -->
							<div class="form-floating mb-2">
								<input type="text" name="email" id="email" class="form-control"
									placeholder="name@example.com"><label for="email">Email</label>
							</div>

							<div class="form-floating mb-4">
								<input type="password" name="pw" id="password"
									class="form-control" placeholder="PassWord"><label
									for="password">Password</label>
							</div>

							<!-- 로그인 버튼 -->
							<button type="submit" class="btn btn-primary">로그인</button>
						</form>

						<!-- 회원가입 버튼 -->
						<form class="login" action="goJoin" method="post">
							<button type="submit" class="btn btn-secondary mt-3">회원가입</button>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<style scoped>
body {
   display: grid;
   grid-template-columns : 1fr 1fr;
	place-items: center;
   width: 1800px;
   overflow-x : hidden;
   overflow-y : hidden;
   margin: 0;
}

.container {
   max-width: auto; /* 전체 컨테이너 최대 너비 */
   width: 100%;
   padding: 20px;
   display: flex;
   justify-content: space-between; /* 로고와 폼 간 거리 유지 */
   align-items: center;
}

.project-logo img {
   max-width: 100%; /* 로고 크기 조정 */
   height: auto;
   display: block;
   margin: 0 auto;
   position: relative; /* 위치 이동을 가능하게 설정 */
   left: 150px; /* 오른쪽으로 150px 이동 */
}



.btn-primary {
   margin-top: 150px;
   background-color: #5b9bd5;
   color: white;
   border: none;
   padding: 10px 20px;
   cursor: pointer;
   font-size: 16px;
   border-radius: 5px;
   width: 100%; /* 버튼도 폼 너비에 맞춤 */
}

.btn-primary:hover {
   background-color: #4a8cc7;
}

.btn-secondary {
   
   background-color: #b0c4de;
   color: white;
   border: none;
   padding: 10px 20px;
   cursor: pointer;
   font-size: 16px;
   border-radius: 5px;
   width: 100%; /* 버튼도 폼 너비에 맞춤 */
}

.btn-secondary:hover {
   background-color: #98a6c8;
}

.screen {
   background-color: white;
   padding: 30px;
   border-radius: 8px;
   box-shadow: 2px 6px 12px rgba(0, 0, 0, 0.3);
   max-width: 600px;
   width: 400px;
   height: 500px;
   position: relative; /* 위치 이동을 가능하게 설정 */
   left: 100px; /* 오른쪽으로 150px 이동 */
}

.screen__content {
   z-index: 1;
   position: relative;
   width: 100%;
   text-align: left;
}


</style>