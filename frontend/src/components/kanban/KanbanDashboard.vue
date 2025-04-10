<template>
    <aside class="right-sidebar">
			<section class="taskDashboard">
				<div class="chart-container">
					<canvas id="myChart"></canvas>
					<div class="dashboard-stats" id="dashboard-stats">
						<div class="stat-card totalTasks">
							<strong>전체 태스크</strong>
							<p id="total-task-num">0</p>
						</div>
						<div class="stat-card inProgress">
							<strong>할 일</strong>
							<p id="todo-task-num">0</p>
						</div>
						<div class="stat-card pending">
							<strong>진행</strong>
							<p id="doing-task-num">0</p>
						</div>
						<div class="stat-card completed">
							<strong>완료</strong>
							<p id="done-task-num">0</p>
						</div>
					</div>
				</div>

			</section>

		</aside>


</template>