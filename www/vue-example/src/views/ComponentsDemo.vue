<script setup lang="ts">
import { ref } from 'vue'
import { Edit, Delete, Search, Star, StarFilled } from '@element-plus/icons-vue'

interface Employee {
  id: number
  name: string
  department: string
  role: string
  email: string
  salary: number
  status: 'Active' | 'On Leave' | 'Probation'
  rating: number
  joinDate: string
}

const searchQuery = ref('')

const tableData = ref<Employee[]>([
  { id: 1, name: 'Alice Johnson', department: 'Engineering', role: 'Senior Developer', email: 'alice@example.com', salary: 125000, status: 'Active', rating: 5, joinDate: '2021-03-15' },
  { id: 2, name: 'Bob Williams', department: 'Design', role: 'UI/UX Lead', email: 'bob@example.com', salary: 110000, status: 'Active', rating: 4, joinDate: '2020-07-22' },
  { id: 3, name: 'Carol Davis', department: 'Marketing', role: 'Marketing Manager', email: 'carol@example.com', salary: 95000, status: 'On Leave', rating: 4, joinDate: '2022-01-10' },
  { id: 4, name: 'David Brown', department: 'Engineering', role: 'Backend Developer', email: 'david@example.com', salary: 105000, status: 'Active', rating: 3, joinDate: '2023-05-08' },
  { id: 5, name: 'Eva Martinez', department: 'Engineering', role: 'Frontend Developer', email: 'eva@example.com', salary: 98000, status: 'Probation', rating: 3, joinDate: '2024-11-01' },
  { id: 6, name: 'Frank Wilson', department: 'Sales', role: 'Sales Director', email: 'frank@example.com', salary: 130000, status: 'Active', rating: 5, joinDate: '2019-09-14' },
  { id: 7, name: 'Grace Lee', department: 'HR', role: 'HR Specialist', email: 'grace@example.com', salary: 82000, status: 'Active', rating: 4, joinDate: '2022-06-30' },
  { id: 8, name: 'Henry Taylor', department: 'Engineering', role: 'DevOps Engineer', email: 'henry@example.com', salary: 115000, status: 'Active', rating: 4, joinDate: '2021-12-05' },
  { id: 9, name: 'Iris Chen', department: 'Design', role: 'Graphic Designer', email: 'iris@example.com', salary: 78000, status: 'Active', rating: 3, joinDate: '2023-08-20' }
])

const statusTagType = (status: string) => {
  const map: Record<string, string> = {
    'Active': 'success',
    'On Leave': 'warning',
    'Probation': 'info',
  }
  return map[status] || 'info'
}

const formatSalary = (val: number) => `$${val.toLocaleString()}`

const summaryMethod = ({ columns, data }: { columns: any[]; data: Employee[] }) => {
  const sums: string[] = []
  columns.forEach((col: any, index: number) => {
    if (index === 0) {
      sums[index] = 'Total'
      return
    }
    if (col.property === 'salary') {
      const total = data.reduce((sum, row) => sum + row.salary, 0)
      sums[index] = formatSalary(total)
    } else if (col.property === 'name') {
      sums[index] = `${data.length} employees`
    } else {
      sums[index] = ''
    }
  })
  return sums
}
</script>

<template>
  <div class="components-page">
    <h2 class="page-title">Third-party Components</h2>
    <p class="page-desc">Element Plus components rendered in the DOM. Export to verify complex component PDF output.</p>

    <!-- Stats Cards -->
    <div class="stats-row">
      <el-card shadow="hover" class="stat-card">
        <div class="stat-value" style="color: #409eff;">{{ tableData.length }}</div>
        <div class="stat-label">Total Employees</div>
      </el-card>
      <el-card shadow="hover" class="stat-card">
        <div class="stat-value" style="color: #67c23a;">{{ tableData.filter(r => r.status === 'Active').length }}</div>
        <div class="stat-label">Active</div>
      </el-card>
      <el-card shadow="hover" class="stat-card">
        <div class="stat-value" style="color: #e6a23c;">{{ tableData.filter(r => r.status === 'On Leave').length }}</div>
        <div class="stat-label">On Leave</div>
      </el-card>
      <el-card shadow="hover" class="stat-card">
        <div class="stat-value" style="color: #909399;">{{ tableData.filter(r => r.status === 'Probation').length }}</div>
        <div class="stat-label">Probation</div>
      </el-card>
      <el-card shadow="hover" class="stat-card">
        <div class="stat-value" style="color: #f56c6c;">{{ formatSalary(tableData.reduce((s, r) => s + r.salary, 0)) }}</div>
        <div class="stat-label">Total Salary</div>
      </el-card>
    </div>

    <!-- Search Bar -->
    <div class="toolbar">
      <el-input
        v-model="searchQuery"
        placeholder="Search employees..."
        :prefix-icon="Search"
        clearable
        style="width: 280px;"
      />
      <div class="toolbar-right">
        <el-button type="primary">Add Employee</el-button>
        <el-button>Import</el-button>
      </div>
    </div>

    <!-- Main Table -->
    <el-card shadow="never" class="table-card">
      <el-table
        :data="tableData.filter(d => !searchQuery || d.name.toLowerCase().includes(searchQuery.toLowerCase()) || d.department.toLowerCase().includes(searchQuery.toLowerCase()))"
        stripe
        border
        show-summary
        :summary-method="summaryMethod"
        style="width: 100%;"
        :header-cell-style="{ background: '#f5f7fa', fontWeight: '600', color: '#303133' }"
      >
        <el-table-column type="index" label="#" width="50" align="center" />
        <el-table-column prop="name" label="Name" min-width="140" sortable>
          <template #default="{ row }">
            <div style="display: flex; align-items: center; gap: 8px;">
              <el-avatar :size="28" style="background: #409eff; flex-shrink: 0;">
                {{ row.name.charAt(0) }}
              </el-avatar>
              <span style="font-weight: 500;">{{ row.name }}</span>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="department" label="Department" width="130" sortable>
          <template #default="{ row }">
            <el-tag size="small" effect="plain">{{ row.department }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="role" label="Role" min-width="150" />
        <el-table-column prop="email" label="Email" min-width="180">
          <template #default="{ row }">
            <span style="color: #409eff;">{{ row.email }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="salary" label="Salary" width="120" align="right" sortable>
          <template #default="{ row }">
            <span style="font-weight: 500; font-variant-numeric: tabular-nums;">{{ formatSalary(row.salary) }}</span>
          </template>
        </el-table-column>
        <el-table-column prop="status" label="Status" width="110" align="center">
          <template #default="{ row }">
            <el-tag :type="statusTagType(row.status)" size="small">{{ row.status }}</el-tag>
          </template>
        </el-table-column>
        <el-table-column prop="rating" label="Rating" width="130" align="center">
          <template #default="{ row }">
            <div style="display: flex; gap: 2px; justify-content: center;">
              <el-icon v-for="i in 5" :key="i" :size="14" :color="i <= row.rating ? '#e6a23c' : '#dcdfe6'">
                <StarFilled v-if="i <= row.rating" />
                <Star v-else />
              </el-icon>
            </div>
          </template>
        </el-table-column>
        <el-table-column prop="joinDate" label="Join Date" width="120" sortable />
        <el-table-column label="Actions" width="120" align="center" fixed="right">
          <template #default>
            <el-button :icon="Edit" size="small" circle />
            <el-button :icon="Delete" size="small" type="danger" circle />
          </template>
        </el-table-column>
      </el-table>
    </el-card>

    <!-- Additional Components -->
    <div class="extra-section">
      <h3 class="section-title">Additional Components</h3>
      <div class="extra-grid">
        <el-card shadow="hover">
          <template #header>
            <span style="font-weight: 600;">Progress Bars</span>
          </template>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 4px; font-size: 13px;">
                <span>Engineering</span><span>85%</span>
              </div>
              <el-progress :percentage="85" :stroke-width="10" color="#409eff" :show-text="false" />
            </div>
            <div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 4px; font-size: 13px;">
                <span>Design</span><span>62%</span>
              </div>
              <el-progress :percentage="62" :stroke-width="10" color="#67c23a" :show-text="false" />
            </div>
            <div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 4px; font-size: 13px;">
                <span>Marketing</span><span>45%</span>
              </div>
              <el-progress :percentage="45" :stroke-width="10" color="#e6a23c" :show-text="false" />
            </div>
            <div>
              <div style="display: flex; justify-content: space-between; margin-bottom: 4px; font-size: 13px;">
                <span>Sales</span><span>91%</span>
              </div>
              <el-progress :percentage="91" :stroke-width="10" color="#f56c6c" :show-text="false" />
            </div>
          </div>
        </el-card>

        <el-card shadow="hover">
          <template #header>
            <span style="font-weight: 600;">Badges &amp; Tags</span>
          </template>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <el-tag>Default</el-tag>
              <el-tag type="success">Success</el-tag>
              <el-tag type="info">Info</el-tag>
              <el-tag type="warning">Warning</el-tag>
              <el-tag type="danger">Danger</el-tag>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <el-tag effect="dark">Dark</el-tag>
              <el-tag type="success" effect="dark">Dark</el-tag>
              <el-tag type="info" effect="dark">Dark</el-tag>
              <el-tag type="warning" effect="dark">Dark</el-tag>
              <el-tag type="danger" effect="dark">Dark</el-tag>
            </div>
            <div style="display: flex; gap: 8px; flex-wrap: wrap;">
              <el-tag effect="plain" round>Round</el-tag>
              <el-tag type="success" effect="plain" round>Round</el-tag>
              <el-tag type="info" effect="plain" round>Round</el-tag>
              <el-tag type="warning" effect="plain" round>Round</el-tag>
              <el-tag type="danger" effect="plain" round>Round</el-tag>
            </div>
          </div>
        </el-card>

        <el-card shadow="hover">
          <template #header>
            <span style="font-weight: 600;">Descriptions</span>
          </template>
          <el-descriptions :column="2" border size="small">
            <el-descriptions-item label="Company">Acme Corp</el-descriptions-item>
            <el-descriptions-item label="Industry">Technology</el-descriptions-item>
            <el-descriptions-item label="Founded">2015</el-descriptions-item>
            <el-descriptions-item label="Employees">{{ tableData.length }}</el-descriptions-item>
            <el-descriptions-item label="Location">San Francisco, CA</el-descriptions-item>
            <el-descriptions-item label="Revenue">
              <el-tag type="success" size="small">$12.5M</el-tag>
            </el-descriptions-item>
          </el-descriptions>
        </el-card>

        <el-card shadow="hover">
          <template #header>
            <span style="font-weight: 600;">Alerts</span>
          </template>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <el-alert title="System update scheduled for this weekend" type="info" :closable="false" show-icon />
            <el-alert title="All reports generated successfully" type="success" :closable="false" show-icon />
            <el-alert title="Storage usage approaching 80% capacity" type="warning" :closable="false" show-icon />
            <el-alert title="Failed to sync 3 employee records" type="error" :closable="false" show-icon />
          </div>
        </el-card>
      </div>
    </div>
  </div>
</template>

<style scoped>
.components-page {
  max-width: 1100px;
}

.page-title {
  font-size: 24px;
  font-weight: 700;
  color: #1d1e20;
  margin-bottom: 6px;
}

.page-desc {
  color: #606266;
  font-size: 14px;
  margin-bottom: 24px;
}

.stats-row {
  display: flex;
  gap: 16px;
  margin-bottom: 20px;
}

.stat-card {
  flex: 1;
  text-align: center;
}

.stat-value {
  font-size: 28px;
  font-weight: 700;
  font-variant-numeric: tabular-nums;
}

.stat-label {
  font-size: 12px;
  color: #909399;
  margin-top: 4px;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
}

.toolbar-right {
  display: flex;
  gap: 8px;
}

.table-card {
  margin-bottom: 32px;
}

.extra-section {
  margin-bottom: 24px;
}

.section-title {
  font-size: 16px;
  font-weight: 600;
  color: #303133;
  margin-bottom: 14px;
  padding-bottom: 8px;
  border-bottom: 2px solid #e4e7ed;
}

.extra-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
</style>
