import React from 'react'
import { Menu } from 'antd'
import {
  HomeOutlined,
  SettingOutlined,
  AppstoreAddOutlined,
  CheckCircleOutlined,
  ScheduleOutlined,
  BellOutlined,
  ToolOutlined,
  MessageOutlined,
  SwapOutlined,
  TeamOutlined,
  FileTextOutlined,
} from '@ant-design/icons'

const MenuList = ({darkTheme}) => {
  return (
    <Menu  theme={darkTheme ? 'light' : 'dark'}  mode='inline' defaultSelectedKeys={['dashboard']} className='menu-bar'>
      <Menu.Item key="dashboard" icon={<HomeOutlined />}>
        Dashboard
      </Menu.Item>

      <Menu.SubMenu key="setup" icon={<AppstoreAddOutlined />} title="Setup">
        <Menu.Item key="setup-home" >Setup</Menu.Item>
        <Menu.Item key="employees" >Employees</Menu.Item>
        <Menu.Item key="positions" >Positions</Menu.Item>
        <Menu.Item key="roles" >Roles</Menu.Item>
        <Menu.Item key="employee-category" >Employee Category</Menu.Item>
        <Menu.Item key="work-condition" >Work Condition</Menu.Item>
        <Menu.Item key="skill" >Skill</Menu.Item>
        <Menu.Item key="services" >Services</Menu.Item>
        <Menu.Item key="workdaytime">Work Day Time</Menu.Item>
        <Menu.Item key="employee-docs" >Employee-Documents</Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu title="Attendance" key="attendance" icon={<CheckCircleOutlined />}>
        <Menu.Item key="attendance-list">Attendance</Menu.Item>
        <Menu.Item key="attendance-all">All</Menu.Item>
        <Menu.Item key="checkin-early">Checkin-Early</Menu.Item>
        <Menu.Item key="checkin-late">Checkin-Late</Menu.Item>
        <Menu.Item key="checkout-early">Checkout-Early</Menu.Item>
        <Menu.Item key="checkout-overtime">Checkout-Overtime</Menu.Item>
        <Menu.Item key="attendance-zone">Attendance-Zone</Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="activities" icon={<ScheduleOutlined />}>Activities</Menu.Item>

      <Menu.SubMenu title="Clock-In-Out" key="clock" icon={<ScheduleOutlined />}>
        <Menu.Item key="clock-main">Clock-In-Out</Menu.Item>
        <Menu.Item key="clock-request">Request</Menu.Item>
        <Menu.Item key="clock-daily">Daily Report</Menu.Item>
        <Menu.Item key="clock-detail">Detail Report</Menu.Item>
      </Menu.SubMenu>

      <Menu.SubMenu title="Leave" key="leave" icon={<SwapOutlined />}>
        <Menu.Item key="leave-main">Leave</Menu.Item>
        <Menu.Item key="leave-request">Request</Menu.Item>
        <Menu.Item key="leave-type">Type</Menu.Item>
        <Menu.Item key="leave-group">Type-Group</Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="pushnotification" icon={<BellOutlined />}>Push Notifications</Menu.Item>

      <Menu.SubMenu title="Setting" key="setting" icon={<SettingOutlined />}>
        <Menu.Item key="setting-main">Setting</Menu.Item>
        <Menu.Item key="setting-holidays">Holidays</Menu.Item>
        <Menu.Item key="setting-workdays">Work-Days</Menu.Item>
        <Menu.Item key="setting-card">Card</Menu.Item>
        <Menu.Item key="setting-users">Users</Menu.Item>
        <Menu.Item key="setting-roles">Roles</Menu.Item>
        <Menu.Item key="setting-login">Login History</Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="feedback" icon={<MessageOutlined />}>Feedback</Menu.Item>

      <Menu.SubMenu title="Shift" key="shift" icon={<ToolOutlined />}>
        <Menu.Item key="shift-main">Shift</Menu.Item>
        <Menu.Item key="shift-list">List</Menu.Item>
        <Menu.Item key="shift-calendar">Calendar</Menu.Item>
        <Menu.Item key="shift-employees">Employees</Menu.Item>
        <Menu.Item key="shift-request">Request</Menu.Item>
      </Menu.SubMenu>

      <Menu.Item key="shiftgroup" icon={<TeamOutlined />}>Shift Group</Menu.Item>

      <Menu.SubMenu title="Report" key="report" icon={<FileTextOutlined />}>
        <Menu.Item key="report-main">Reports</Menu.Item>
        <Menu.Item key="report-daily">Dailys</Menu.Item>
        <Menu.Item key="report-monthly">Monthly</Menu.Item>
        <Menu.Item key="report-summary">Summary</Menu.Item>
        <Menu.Item key="report-detail">Details</Menu.Item>
        <Menu.Item key="report-top">Top Employee</Menu.Item>
      </Menu.SubMenu>
    </Menu>
  )
}

export default MenuList
